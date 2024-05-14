import { useState } from "react";
import css from './Hero.module.css'
import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";
import TransactionTable from "../TransactionTable/TransactionTable";

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
const transactions = [
  {
    id: 1,
    date: "2024-05-13",
    description: "Mleko",
    category: "Products",
    sum: 2,
  },
  {
    id: 2,
    date: "2024-05-14",
    description: "Kawa",
    category: "Products",
    sum: 5,
  },
  {
    id: 3,
    date: "2024-05-14",
    description: "Dentysta",
    category: "Health",
    sum: 500,
  },
];
const handleDelete = (id) => {
  // Implementacja usuwania transakcji
};

function Hero() {
  const [type, setType] = useState("expenses");

//   const handleTabChange = (selectedType) => {
//     setType(selectedType);
//   };
  return (
    <div className={css['hero-wrapper']}>
      <FormTransaction />
      <div className={css['hero-table']}>
      <TransactionTable
        transactions={transactions}
        type={type}
        handleDelete={handleDelete}
      />
      <SummaryTable data={data} /></div>
    </div>
  );
}

export default Hero;
