import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./FormTransaction.module.css";
import Button from "../Balance/UI/Button/Button.jsx";
import { useTranslation } from "react-i18next";


function FormTransaction() {
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

      <label>
        <input
          className={css["transaction-description"]}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("FormTransactionPlaceholder")}
          required
          style={{ color: "var(--accent-lightgrey)" }}
        />
      </label>

      <div className={css["transaction-select"]}>
        <select
          data-value={category}
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
           
           
          <option value="">{t("ProductCategory")}</option>
          <option value="Transport">{t("Transport")}</option>
          <option value="Products">{t("Products")}</option>
          <option value="Health">Health</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Technique">Technique</option>
          <option value="Communal, communication">
            Communal, communication
          </option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
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
            onChange={(e) => setAmount(e.target.value)}
          />
          <svg className={css["calc-icon"]}>
            <use href="/src/assets/icons.svg#icon-calculator"></use>
          </svg>
        </label>
      </div>
      <div className={css["buttons-wrapper"]} > 
        <Button onClick={handleSubmitInput} text="INPUT" />
        <Button onClick={handleClear} text="CLEAR" />
      </div>
    </form>
  );
}

export default FormTransaction;
