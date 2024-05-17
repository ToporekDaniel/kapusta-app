import "./Dashboard.css";
import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";

function Dashboard() {
  return (
    <div className="dashboard">
      <Balance />
      <Reports /> 
    </div>
  );
}

export default Dashboard;
