import Dashboard from "../../pages/Dashboard/Dashboard";
import Hero from "../Hero/Hero";
import { LoginForm } from "../LoginGoogle/LoginPage";

const HomePage = () => {
  return (
    <>
      <Dashboard />

      <Hero />
      <LoginForm />
    </>
  );
};

export default HomePage;
