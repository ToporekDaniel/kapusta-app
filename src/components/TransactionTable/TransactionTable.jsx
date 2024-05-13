// import { useState, useEffect } from "react";
import css from "./TransactionTable.module.css";
// import trashIcon from "../assets/icons.svg/icon-trash.svg";
import PropTypes from "prop-types";

function TransactionTable({ transactions, type, handleDelete }) {
  // Pobierz dane z odpowiedniego endpointu na podstawie wybranego typu
  // type to: 'expenses' albo 'incomes'

  //       const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetchData();
  //   }, [type]);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://kapusta-app-madam-pab.netlify.app/transactions/${type}`); //wpisać odpowiedni url
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  

  return (
    <table className={css["transaction-table"]}>
      <thead>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>category</th>
          <th>sum</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td className={type === "expenses" ? css.expense : css.income}>
  {transaction.sum}
  <div className={css.icon}>
    {type === "expenses" && (
      <svg
        width="18"
        height="18"
        onClick={() => handleDelete(transaction.id)}
      >
        <use href="/src/assets/icons.svg#icon-trash"></use>
      </svg>
    )}
  </div>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(["expenses", "income"]).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TransactionTable;
