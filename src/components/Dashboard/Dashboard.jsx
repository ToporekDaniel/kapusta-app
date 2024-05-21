import Backspace from "../../assets/icons/backspace.svg?react";
import Balance from "../Balance/Balance";
import Reports from "../Reports/Reports";
import { Link, useLocation } from "react-router-dom";
import DataSlider from "../DataSlider/DataSlider";
import css from "./Dashboard.module.css";
import { useTranslation } from "react-i18next";
// import { useEffect } from "react";

function Dashboard() {
  const location = useLocation();

  // useEffect(( )=> {
  //   console.log("location", location);
  // }, [])
const {t} = useTranslation();
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
