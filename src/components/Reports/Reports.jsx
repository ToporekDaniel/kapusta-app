import { Link } from "react-router-dom";
import './Reports.css';
import ReportsIcon from "../../assets/icons/reports.svg?react";

function Reports() {
  return (
    <div className="reports-container">
      <Link to="/reports" className="reports-link">
        <p>        Reports
        </p>

        <ReportsIcon />
      </Link>
    </div>
  );
}

export default Reports;
