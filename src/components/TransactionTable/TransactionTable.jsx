import { useTranslation } from "react-i18next";
import css from "./TransactionTable.module.css";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

function TransactionTable({ transactions, type, handleDelete }) {
  const isMobileView = useMediaQuery({ query: "(max-width: 767px)" });

  const emptyRows = transactions.length < 10 ? new Array(10 - transactions.length).fill(undefined) : new Array(0);


  const rows = [...transactions, ...emptyRows];

  const { t } = useTranslation();
  return (
    <div className={css["transaction-table-wrapper"]}>
      <table className={css["transaction-table"]}>
        {!isMobileView && (
          <thead>
            <tr>
              <th>{t("Date")}</th>
              <th>{t("Description")}</th>
              <th>{t("Category")}</th>
              <th>{t("Sum")}</th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, index) =>
            row ? (
              <tr key={row.id}>
                {isMobileView ? (
                  <>
                    <td>
                      <div className={css["mobile-category"]}>
                        {row.category}
                        <div className={css["mobile-details"]}>
                          <div className={css["mobile-date"]}>{row.date}</div>
                          <div className={css["mobile-description"]}>
                            {row.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className={type === "expenses" ? css.expense : css.income}
                    >
                      {row.amount.toFixed(2)}
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
                  </>
                ) : (
                  <>
                    <td>{row.date}</td>
                    <td>{row.description}</td>
                    <td>{t(row.category)}</td>
                    <td
                      className={type === "expenses" ? css.expense : css.income}
                    >
                      {row.amount.toFixed(2)}
                      <div
                        className={css.icon}
                        onClick={() => handleDelete(row.id)}
                      >
                        <svg width="18" height="18">
                          <use href="/src/assets/icons.svg#icon-trash"></use>
                        </svg>
                      </div>
                    </td>
                  </>
                )}
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
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(["expenses", "income"]).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TransactionTable;
