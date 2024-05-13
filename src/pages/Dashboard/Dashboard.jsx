import "./Dashboard.css";

import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";
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
  const [type, setType] = useState("expenses");

  const handleTabChange = (selectedType) => {
    setType(selectedType);
  };
  return (
    <div className="dashboard">
      <Balance />
      <Reports />
      <div>
        <button onClick={() => handleTabChange("expenses")}>Expenses</button>
        <button onClick={() => handleTabChange("income")}>Income</button>
      </div>
      <TransactionTable
        transactions={transactions}
        type={type}
        handleDelete={handleDelete}
      />
      <SummaryTable data={data} />
    </div>
  );
}

export default Dashboard;
