import Dashboard from "../../components/Dashboard/Dashboard";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css";
import { useUser } from "./../../lib/customHooks";

const HomePage = () => {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return ( <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Dashboard</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>
    );
  }
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
