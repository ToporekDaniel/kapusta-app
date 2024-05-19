import { LoginForm } from "./LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.login}>
      <div className={css.logo}>
        <h1 className={css.title}>Kapu$ta</h1>
        <p className={css.subtitle}>Your personal finance manager</p>
      </div>
      <LoginForm className={css.form} />
    </div>
  );
};

export default LoginPage;
