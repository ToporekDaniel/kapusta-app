import { Link } from "react-router-dom";
import css from "./Reports.module.css";
import ReportsIcon from "../../assets/icons/reports.svg?react";
import { useTranslation } from "react-i18next";

function Reports() {
  const { t } = useTranslation();
  return (
    <div className={css["reports-container"]}>
      <Link to="/reports" className={css["reports-link"]}>
        <p>{t("Reports")}</p>
        <ReportsIcon />
      </Link>
    </div>
  );
}

export default Reports;
