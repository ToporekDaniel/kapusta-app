// import Dashboard from "../../pages/Dashboard/Dashboard";
// import Hero from "../../components/Hero/Hero";
import { LoginForm } from "./LoginForm";
import css from "./LoginPage.module.css";
import { API_ROUTES, APP_ROUTES } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../lib/customHooks";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate(APP_ROUTES.HOME);
    // return;
  }

  return (
    <div className={css["loginpage-container"]}>
      <div className={css.logo}>
        <h1 className={css.title}>Kapu$ta</h1>
        <p className={css.subtitle}>smart finance</p>
      </div>
      <div className={css["background-top"]}></div>
      <div className={css["background-bottom"]}></div>
      <div className={css["image"]}></div>
      <LoginForm className={css.form} />
    </div>
  );
};

export default LoginPage;
