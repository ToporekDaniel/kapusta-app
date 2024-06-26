import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { disableInput } from "../../app/store";
import { useFinance } from "../../../contexts/FinanceContext";
import "./Balance.module.css";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import css from "./Balance.module.css";

function Balance() {
  const [inputBalance, setInputBalance] = useState("");
  const { expenses, income } = useFinance();
  const inputDisabled = useSelector((state) => state.balance.inputDisabled);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setInputBalance(calculatedBalance.toFixed(2));

    setShowModal(calculatedBalance === 0);
  }, [expenses, income]);

  const handleConfirm = () => {
    const numBalance = parseFloat(inputBalance);
    if (numBalance === 0) {
      setShowModal(true);
    } else {
      alert("Balance confirmed: " + numBalance + " PLN");
      dispatch(disableInput());
      setShowModal(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value) || value === "") {
      setInputBalance(value);
      setShowModal(!value || parseFloat(value) === 0);
    }
  };

  const { t } = useTranslation();
  return (
    <div
      className={`${css["balance-container"]} ${
        inputDisabled ? css["row"] : ""
      }`}
    >
      <label className={css["balance-label"]}>{t("balance")}</label>
      <div>
        <input
          type="text"
          className={`${css["balance-value"]} ${
            inputDisabled ? css["rounded"] : ""
          }`}
          value={inputBalance}
          onChange={handleInputChange}
          disabled={inputDisabled}
        />
        {showModal && (
          <div className={css["modal"]}>
            <div className={css["modal-content"]}>
              <p>{t("firstBalanceP")}</p>
              <p>{t("secondBalanceP")}</p>
            </div>
          </div>
        )}
        {!inputDisabled && (
          <Button
            className={css["confirm-button"]}
            onClick={handleConfirm}
            text={t("CONFIRM")}
          />
        )}
      </div>
    </div>
  );
}

export default Balance;
