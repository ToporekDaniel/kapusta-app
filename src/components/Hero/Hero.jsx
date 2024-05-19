import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Hero.module.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const [type, setType] = useState("expenses");

  const handleTabChange = (selectedType) => {
    setType(selectedType);
  };
  const {t} = useTranslation();
  return (
    <div className={css["hero-container"]}>
      
      <nav className={css["tab-wrapper"]}>
        <NavLink
          to="/expenses"
          className={type === "expenses" ? css["tab-active"] : css["tab"]}
          onClick={() => handleTabChange("expenses")}
        >
          {t('Expenses')}
        </NavLink>

        <NavLink
          to="/income"
          className={type === "income" ? css["tab-active"] : css["tab"]}
          onClick={() => handleTabChange("income")}
        >
          {t('Income')}
        </NavLink>
      </nav>
      <Outlet />
     
    </div>
  );
}

export default Hero;
