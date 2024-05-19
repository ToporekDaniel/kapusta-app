import { LoginForm } from "./LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.login}>
      <LoginForm className={css.form} />
    </div>
  );
};

export default LoginPage;
