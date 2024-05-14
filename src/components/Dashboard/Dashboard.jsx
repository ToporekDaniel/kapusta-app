import Backspace from "../../assets/icons/backspace.svg?react";

import Balance from "../Balance/Balance";
import Reports from "../Reports/Reports";
import { Link, useLocation } from "react-router-dom";
import DataSlider from "../DataSlider/DataSlider";
import css from "./Dashboard.module.css";
// import { useEffect } from "react";

function Dashboard() {
  const location = useLocation();

  // useEffect(( )=> {
  //   console.log("location", location);
  // }, [])

  return (
    <div className={css["dashboard"]}>
      <div className={css['back-to-home-link-container']}>
        {location.pathname !== '/' && (
          <Link to="/">
            <Backspace />
            <p className={css['text']}>Main Page</p>
          </Link>
        )}
      </div>
      <Balance />
      {location.pathname !== '/reports' && ( <Reports />)}
       {location.pathname !== '/' && (
      <DataSlider />
      )} 
    </div>
  );
}

export default Dashboard;
