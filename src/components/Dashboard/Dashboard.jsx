import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Backspace from "../../assets/icons/backspace.svg?react";
import Balance from "../Balance/Balance";
import Reports from "../Reports/Reports";
import DataSlider from "../DataSlider/DataSlider";
import css from "./Dashboard.module.css";

function Dashboard() {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Condition to check if current path is related to reports
  const isReportsPath = location.pathname.includes("/reports");

  return (
    <div className={css["dashboard"]}>
      {isReportsPath && (
        <div className={css["back-to-home-link-container"]}>
          <Link to="/">
            <Backspace />
            <p className={css["text"]}>{t('MainPage')}</p>
          </Link>
        </div>
      )}
      <Balance />
      {(location.pathname === "/" ||
        location.pathname.startsWith("/expenses") ||
        location.pathname.startsWith("/income")) && <Reports />}
      {isReportsPath && <DataSlider />}
    </div>
  );
}

export default Dashboard;
