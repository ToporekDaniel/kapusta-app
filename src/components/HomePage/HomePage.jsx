import Dashboard from "../../pages/Dashboard/Dashboard";
import Hero from "../Hero/Hero";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css["homepage-container"]}>
      <div className={css["background-top"]}></div>
      <div className={css["background-bottom"]}></div>
      <Dashboard />
      <Hero />
    </div>
  );
};

export default HomePage;
