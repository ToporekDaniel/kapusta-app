import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./App.jsx";
import i18n from "../src/app/i18n.js"
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="835299169883-3ek9rfaqabfh13c39tm23db8qlp56o7c.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
);
