import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";
import TransactionTable from "../TransactionTable/TransactionTable";
import css from "./Hero.module.css";
import selectOptionsExpenses from "./selectOptionsExpenses";
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
// const initialTransactions = [
//   {
//     id: 1,
//     date: "2024-05-13",
//     description: "Mleko",
//     category: "Products",
//     amount: 2,
//   },
//   {
//     id: 2,
//     date: "2024-05-14",
//     description: "Kawa",
//     category: "Products",
//     amount: 30,
//   },
//   {
//     id: 3,
//     date: "2024-05-14",
//     description: "Dentysta",
//     category: "Health",
//     amount: 500,
//   },
//   {
//     id: 4,
//     date: "2024-05-14",
//     description: "Pepco",
//     category: "Other",
//     amount: 999999,
//   },
// ];

const type = "expenses";

function HeroExpenses() {
  const [transactions, setTransactions] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });

  useEffect(() => {
    handleFetchTransactions();
    handleFetchSummary();
  }, []);

  const handleFetchTransactions = async () => {
    try {
      const accessToken = getAccessTokenFromLocalStorage();

      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await axios.get(
        "https://kapusta-server.onrender.com/api/transaction/expense",
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

  const handleFetchSummary = async () => {
    try {
      const accessToken = getAccessTokenFromLocalStorage();
      if (!accessToken) throw new Error("No access token found");

      const response = await axios.get(
        "https://kapusta-server.onrender.com/api/summary",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            period: "monthly"
          }
        }
      );

      const fetchedSummary = response.data.summary;
      setSummaryData(Object.entries(fetchedSummary.expenseSummaryByCategory).map(([key, value]) => ({ monthName: key, value })));
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const handleAddTransaction = async (newTransaction) => {
    try {
      // BACKEND usunąć console.log
      console.log("Adding transaction:", newTransaction);

      const accessToken = getAccessTokenFromLocalStorage();

      const response = await axios.post(
        "https://kapusta-server.onrender.com/api/transaction/expense",
        newTransaction,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const addedTransaction = response.data;

      // BACKEND usunąć console.log
      console.log("Transaction added:", addedTransaction);

      setTransactions([...transactions, addedTransaction]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // BACKEND usunąć console.log
      console.log("Deleting transaction with ID:", id);

      const accessToken = getAccessTokenFromLocalStorage();

      const response = await axios.delete(
        `https://kapusta-server.onrender.com/api/transaction/expense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to delete transaction");
      }

      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
      // BACKEND usunąć console.log
      console.log("Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div>
      <div className={css["hero-wrapper"]}>
        <FormTransaction
          selectOptions={selectOptionsExpenses}
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

export default HeroExpenses;
