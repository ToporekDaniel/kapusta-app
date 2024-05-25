import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";
import TransactionTable from "../TransactionTable/TransactionTable";
import css from "./Hero.module.css";
import selectOptionsIncome from "./selectOptionsIncome";
import axios from "axios";
import { getAccessTokenFromLocalStorage } from "../../lib/common";

// BACKEND - usunąć te przykładowe dane
//przykładowe dane do wyświetlenia w tabeli
//finalnie powinny być zaciągane przez serwer
const summaryData = [
  { monthName: "January", value: 222 },
  { monthName: "February", value: 100 },
  { monthName: "March", value: 333 },
  { monthName: "January", value: 10 },
  { monthName: "January", value: 8 },
  { monthName: "January", value: 100 },
];
const initialTransactions = [
  {
    id: 1,
    date: "2024-05-13",
    description: "Wypłata",
    category: "Salary",
    amount: 5000,
  },
  {
    id: 2,
    date: "2024-05-14",
    description: "Zlecenie",
    category: "Add. Income",
    amount: 500,
  },
  {
    id: 3,
    date: "2024-05-14",
    description: "alaaaaa",
    category: "Add. Income",
    amount: 100,
  },
];

const type = "income";

function HeroIncome() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });

  useEffect(() => {
    handleFetchTransactions();
  }, []);

  const handleFetchTransactions = async () => {
    try {
      const accessToken = getAccessTokenFromLocalStorage();

      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await axios.get(
        "https://kapusta-server.onrender.com/api/transaction/income",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const fetchedTransactions = response.data.expenses;
      setTransactions(fetchedTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleAddTransaction = async (newTransaction) => {
    try {
      const accessToken = getAccessTokenFromLocalStorage();

      const response = await axios.post(
        "https://kapusta-server.onrender.com/api/transaction/income",
        newTransaction,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to add transaction");
      }

      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting transaction with ID:", id);
      const accessToken = getAccessTokenFromLocalStorage();
      const response = await axios.delete(
        `https://kapusta-server.onrender.com/api/transaction/income/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to delete transaction");
      }

      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
      setTransactions(updatedTransactions);

      console.log("Transaction deleted.");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div>
      <div className={css["hero-wrapper"]}>
        <FormTransaction
          selectOptions={selectOptionsIncome}
          onAddTransaction={handleAddTransaction}
          type={type}
        />
        <div className={css["hero-wrapper-tables"]}>
          <TransactionTable
            className={css["hero-transaction-table"]}
            transactions={transactions}
            type={type}
            handleDelete={handleDelete}
          />
          {!isTablet && <SummaryTable summaryData={summaryData} />}
        </div>
      </div>
      {isTablet && <SummaryTable summaryData={summaryData} />}
    </div>
  );
}

export default HeroIncome;
