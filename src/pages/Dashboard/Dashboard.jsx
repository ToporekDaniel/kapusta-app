import './Dashboard.css';

import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";
import FormTransaction from "../../components/FormTransaction/FormTransaction.jsx";
import SummaryTable from "../../components/SummaryTable/SummaryTable";



function Dashboard() {
  return (
    <div className='dashboard'>
      <Balance />
      <Reports />
      <FormTransaction />
      <SummaryTable data={data} />
    </div>
  );
}

SummaryTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      monthName: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Dashboard;
