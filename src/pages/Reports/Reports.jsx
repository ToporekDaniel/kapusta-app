import { Link } from "react-router-dom"; 
import './Reports.css'; 

function Reports() {
  return (
    <div className="reports-container">
      <Link to="/reports" className="reports-link">
        <p>        Reports 
</p>
        <svg className="icon-reports" viewBox="0 0 32 32" fill="gray">
          <use href="/icons.svg#icon-reports" /> 
        </svg>
      </Link>
    </div>
  );
}

export default Reports;
