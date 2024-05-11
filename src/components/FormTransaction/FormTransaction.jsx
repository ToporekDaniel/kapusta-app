import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./FormTransaction.modules.css";

function FormTransaction() {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <form className={css['container-transaction']}>
      <div className={css['datapicker-wrapper']}>
        <svg></svg>
        <div className={css['datapicker-input-container']}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <label >
        <input
        className={css['transaction-description']}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product description"
        />
      </label>

      <div className={css['transaction-select']}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Product category</option>
          <option value="Transport">Transport</option>
          <option value="Products">Products</option>
          <option value="Health">Health</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Technique">Technique</option>
          <option value="Communal, communication">
            Communal, communication
          </option>
          <option value="Eduction">Eduction</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <label>
        <input
          className={css['calc-input']}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
    </form>
  );
}

export default FormTransaction;
