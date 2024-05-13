import './Dashboard.css';

import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";
// import SummaryTable from "../../components/SummaryTable/SummaryTable";



function Dashboard() {
  return (
    <div className='dashboard'>
      <Balance />
      <Reports />
    </div>
  );
}



export default Dashboard;
