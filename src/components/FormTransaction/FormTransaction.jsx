import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./FormTransaction.module.css";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";

function FormTransaction({ selectOptions }) {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmitInput = () => {
    // Logika obsługi przycisku INPUT do zrobienie
  };

  const handleClear = () => {
    // Logika obsługi przycisku CLEAR do zrobienia
  };

  const {t} = useTranslation();
  return (
    <form className={css["container-transaction"]}>
      <div className={css["container-inputs"]}>
        <div className={css["datepicker-wrapper"]}>
          <svg width="20" height="20">
            <use href="/src/assets/icons.svg#icon-calendar"></use>
          </svg>
          <div>
            <DatePicker
              className={css["datepicker-input-container"]}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd.MM.yyyy"
            />
          </div>
        </div>

        <input
          className={css["transaction-description"]}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("FormTransactionPlaceholder")}
          required
        />

        <div className={css["transaction-select"]}>
          <select
            data-value={category}

            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" hidden>
              Product category
            </option>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg className={css["select-arrow"]} width="10" height="4">
            <use href="/src/assets/icons.svg#icon-arrow"></use>
          </svg>
        </div>

        <div>
          <label className={css["calc-container"]}>
            <input
              className={css["calc-input"]}
              required
              type="number"
              value={amount}
              placeholder="0,00"
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^\d*\.?\d{0,2}$/;
                if (regex.test(value) || value === "") {
                  setAmount(value);
                }
              }}
            />
            <svg className={css["calc-icon"]}>
              <use href="/src/assets/icons.svg#icon-calculator"></use>
            </svg>
          </label>
        </div>
      </div>

      <div className={css["buttons-wrapper"]} > 
        <Button onClick={handleSubmitInput} text={t("INPUT")} />
        <Button onClick={handleClear} text={t("CLEAR")} />

      </div>
    </form>
  );
}

FormTransaction.propTypes = {
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormTransaction;
