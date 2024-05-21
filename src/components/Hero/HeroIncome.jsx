import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";
import TransactionTable from "../TransactionTable/TransactionTable";
import css from "./Hero.module.css";
import selectOptionsIncome from "./selectOptionsIncome";

// BACKEND - usunąć te przykładowe dane
//przykładowe dane do wyświetlenia w tabeli
//finalnie powinny być zaciągane przez serwer
const data = [
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
    sum: 5000,
  },
  {
    id: 2,
    date: "2024-05-14",
    description: "Zlecenie",
    category: "Add. Income",
    sum: 500,
  },
  {
    id: 3,
    date: "2024-05-14",
    description: "alaaaaa",
    category: "Add. Income",
    sum: 100,
  },
];

const type = "income";

function HeroIncome() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

  const handleAddTransaction = async (newTransaction) => {
    try {
      // BACKEND usunąć console.log
      console.log("Adding transaction:", newTransaction);
      // BACKEND skontrolować endpoint
      const response = await fetch(
     "/api/transaction/income",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      // Pobieram zaktualizowane dane z serwera
      const addedTransaction = await response.json();

      // BACKEND usunąć console.log
      console.log("Transaction added:", addedTransaction);
      // Aktualizuje stan
      setTransactions([...transactions, addedTransaction]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // BACKEND usunąć console.log
      console.log("Deleting transaction with ID:", id);
      const response = await fetch(
        `https://kapusta-server.onrender.com/api/transaction/income/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }

      // Aktualizuje stan komponentu, usuwam transakcję z listy
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
      setTransactions(updatedTransactions);
      // BACKEND usunąć console.log
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
       {!isTablet && <SummaryTable data={data} />}
        </div>
      </div>
      {isTablet && <SummaryTable data={data} />}
    </div>
  );
}

export default HeroIncome;
