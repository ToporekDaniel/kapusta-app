import { Link } from "react-router-dom";
import './Reports.css';
import ReportsIcon  from "../../assets/icons/reports.svg?react";

function Reports() {
  return (
    <div className="reports-container">
      <Link to="/reports" className="reports-link">
        <p>        Reports
        </p>
        {/* <svg className="icon-reports" viewBox="0 0 32 32" fill="gray"> */}
        {/* <use href="/icons.svg#icon-reports" />  */}
        {/* <use href="../../assets/icons.svg#icon-reports" />  */}
        {/* <img src="reports.svg" alt="icon"/> */}
        {/* </svg> */}
<ReportsIcon />
        {/* <svg className="icon icon-bar_chart-24px-1reports"><use xlink:href="#icon-bar_chart-24px-1reports"></use></svg> */}
      </Link>
    </div>
  );
}

export default Reports;
