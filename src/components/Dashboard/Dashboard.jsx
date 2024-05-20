import Backspace from "../../assets/icons/backspace.svg?react";
import Balance from "../Balance/Balance";
import Reports from "../Reports/Reports";
import { Link, useLocation } from "react-router-dom";
import DataSlider from "../DataSlider/DataSlider";
import css from "./Dashboard.module.css";

function Dashboard() {
  const location = useLocation();

  const isReportsPath = location.pathname.startsWith("/reports");

  return (
    <div className={css["dashboard"]}>
      {isReportsPath && (
        <div className={css["back-to-home-link-container"]}>
          <Link to="/">
            <Backspace className={css["back-icon"]} />
            <p className={css["text"]}>Main Page</p>
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
