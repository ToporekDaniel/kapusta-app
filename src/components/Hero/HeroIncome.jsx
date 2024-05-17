import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";
import TransactionTable from "../TransactionTable/TransactionTable";
import css from "./Hero.module.css";
import selectOptionsIncome from "./selectOptionsIncome";

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

const handleDelete = (id) => {
  // Implementacja usuwania transakcji
};

function HeroIncome() {
  return (
    <div className={css["hero-wrapper"]}>
      <FormTransaction selectOptions={selectOptionsIncome} />
      <div className={css["hero-wrapper-tables"]}>
        <TransactionTable
          className={css["hero-transaction-table"]}
          transactions={transactions}
          type={type}
          handleDelete={handleDelete}
        />
        <SummaryTable data={data} />
      </div>
    </div>
  );
}

export default HeroIncome;
