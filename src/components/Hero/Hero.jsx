import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Hero.module.css";

function Hero() {
  const [type, setType] = useState("expenses");

  const handleTabChange = (selectedType) => {
    setType(selectedType);
  };

  return (
    <div className={css["hero-container"]}>
      
      <nav className={css["tab-wrapper"]}>
        <NavLink
          to="/expenses"
          className={type === "expenses" ? css["tab-active"] : css["tab"]}
          onClick={() => handleTabChange("expenses")}
        >
          Expenses
        </NavLink>

        <NavLink
          to="/income"
          className={type === "income" ? css["tab-active"] : css["tab"]}
          onClick={() => handleTabChange("income")}
        >
          Income
        </NavLink>
      </nav>
      <Outlet />
     
    </div>
  );
}

export default Hero;
