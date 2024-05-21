import { useState } from "react";
// import { BtnLoginGoogle } from "./GoogleLogin";
import { LoginGoogle } from "./LoginGoogle";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import PropTypes from "prop-types";

import css from "./LoginForm.module.css";
// import { styled } from "styled-components";
import axios from "axios";

const LoginForm = () => {
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
  //
  // const handleChange = (event) => {
  //   setForm({
  //     ...form,
  //     [event.target.id]: event.target.value,
  //   });
  // };
  //
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //
  //   alert(form.email + " " + form.password);
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      // setIsLoading(true);
      const response = await axios({
        method: "post",
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.token) {
        console.log("Something went wrong during signing in: ", response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.DASHBOARD);
    } catch (err) {
      console.log("Some error occured during signing in: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async () => {
    try {
      // setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: API_ROUTES.SIGN_UP,
        data: {
          email,
          password,
          firstname,
          lastname,
        },
      });
      if (!response?.data?.token) {
        console.log("Something went wrong during signing up: ", response);
        return;
      }
      navigate(APP_ROUTES.SIGN_IN);
    } catch (err) {
      console.log("Some error occured during signing up: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.popup}>
      <div className={css.popupInner}>
        <p className={css.Desc}>You can log in with your Google Account:</p>
        <LoginGoogle />
        <p className={css.Desc}>
          Or log in using an email and password,<br />after registering:
        </p>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={css.mailInpFont}
              type="email"
              placeholder="      your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={css.pswdInpFont}
              type="password"
              placeholder="      ••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={signIn}>Log in</button>
          <button onClick={signUp}>Registration</button>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
