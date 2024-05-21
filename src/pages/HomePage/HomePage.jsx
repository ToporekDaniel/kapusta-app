import Dashboard from "../../components/Dashboard/Dashboard";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css["homepage-container"]}>
      <div className={css["background-top"]}></div>
      <div className={css["background-bottom"]}></div>
      <div className={css["image-tablet"]}></div> 
      <Dashboard />
      <Hero />
    </div>
  );
};

export default HomePage;
