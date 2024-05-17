import { Link } from "react-router-dom";
import css from "./Reports.module.css";
import ReportsIcon from "../../assets/icons/reports.svg?react";

function Reports() {
  return (
    <div className={css["reports-container"]}>
      <Link to="/reports" className={css["reports-link"]}>
        <p> Reports </p>
        <ReportsIcon />
      </Link>
    </div>
  );
}

export default Reports;
