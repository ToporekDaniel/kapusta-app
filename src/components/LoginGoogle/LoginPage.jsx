import { useState } from "react";
// import { BtnLoginGoogle } from "./GoogleLogin";
import { LoginGoogle } from "./LoginGoogle";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import PropTypes from "prop-types";

import css from "./LoginPage.module.css";
// import { styled } from "styled-components";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(form.email + " " + form.password);
  };

  return (
    <div className={css.popup}>
      <div className={css.popupInner}>
        <p className={css.Desc}>You can log in with your Google Account:</p>
        <LoginGoogle />
        <p className={css.Desc}>
          Or log in using an email and password,<br />after registering:
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={css.mailInpFont}
              id="email"
              type="text"
              value={form.email}
              placeholder="      your@email.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={css.pswdInpFont}
              id="password"
              type="password"
              value={form.password}
              placeholder="      ••••••••"
              onChange={handleChange}
            />
          </div>
          <button id="login" type="submit">Log in</button>
          <button id="register" type="submit">Registration</button>
        </form>
      </div>
    </div>
  );
};





export { LoginForm };
