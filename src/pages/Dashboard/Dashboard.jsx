import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";
import {FormTransaction} from "../../components/FormTransaction/FormTransaction.jsx";
// import React from 'react';
import SummaryTable from "../../components/SummaryTable/SummaryTable";

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

function Dashboard() {
  return (
    <div>
      <Balance />
      <Reports />
      <FormTransaction />
      <SummaryTable data={data} />
    </div>
  );
}

export default Dashboard;
