import Dashboard from "../../pages/Dashboard/Dashboard";
import Hero from "../../components/Hero/Hero";
import { LoginForm } from "./LoginForm";
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <body>
      {/*<Dashboard /> */}

      {/*<Hero />*/}
      <LoginForm className={css.form} />
    </body>
  );
};

export default LoginPage;



