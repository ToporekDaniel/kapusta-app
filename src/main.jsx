import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./App.jsx";
import i18n from "../src/app/i18n.js"
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
