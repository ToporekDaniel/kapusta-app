// import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import css from "./TransactionTable.module.css";
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

  const emptyRows = new Array(10 - transactions.length).fill(undefined);

  const rows = [...transactions, ...emptyRows];

  const {t} = useTranslation();
  return (
    <div className={css["transaction-table-wrapper"]}>
      <table className={css["transaction-table"]}>
        <thead>
          <tr>
            <th>{t("Date")}</th>
            <th>{t("Description")}</th>
            <th>{t("Category")}</th>
            <th>{t("Sum")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) =>
            row ? (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.description}</td>
                <td>{row.category}</td>
                <td className={type === "expenses" ? css.expense : css.income}>
                  {row.sum}
                  <div
                    className={css.icon}
                    onClick={() => handleDelete(row.id)}
                  >
                    <svg width="18" height="18">
                      <use
                        href="/src/assets/icons.svg#icon-trash"
                        fill="#52555f"
                      ></use>
                    </svg>
                  </div>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
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
