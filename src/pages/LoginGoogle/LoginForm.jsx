import { useState } from "react";
// import { BtnLoginGoogle } from "./GoogleLogin";
import { LoginGoogle } from "./LoginGoogle";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import PropTypes from "prop-types";

import { APP_ROUTES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { API_ROUTES } from "../../utils/constants";
// import { styled } from "styled-components";

const LoginForm = () => {
  const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  // const handleChange = (event) => {
  //   setForm({
  //     ...form,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // if [event.target.id] =
  //
  //   alert(form.email + " " + form.password + " " + `${event.currentTarget.lastChild }  ${event.target.id}` );
  // };

  const signUp = async () => {

    event.preventDefault();
    try {
      // setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: API_ROUTES.SIGN_UP,
        data: {
          email,
          password,
        },
      });
      if (!response?.data) {
        console.log("Something went wrong during signing up: ", response);
        return;
      }
      navigate(APP_ROUTES.SIGN_IN);
    } catch (err) {
      console.log("Some error occured during signing up: ", err);
    } finally {
      // setIsLoading(false);
    }
  };

  const signIn = async () => {

    event.preventDefault();
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
      navigate(APP_ROUTES.HOME);
    } catch (err) {
      console.log("Some error occured during signing in: ", err);
    } finally {
      // setIsLoading(false);
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
              id="email"
              type="text"
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
              id="password"
              type="password"
              value={password}
              placeholder="      ••••••••"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={signIn} id="login" type="button">Log in</button>
          <button onClick={signUp} id="register" type="button">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };


