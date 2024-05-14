import Dashboard from "../../pages/Dashboard/Dashboard";
import Hero from "../Hero/Hero";
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
    <div className={css["homepage-container"]}>
      <Dashboard />
      <Hero />
      </div>
    </>
  );
};

export default HomePage;
