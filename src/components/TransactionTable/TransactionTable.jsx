import css from "./TransactionTable.module.css";
import PropTypes from "prop-types";

function TransactionTable({ transactions, type, handleDelete }) {
  const emptyRows = new Array(10 - transactions.length).fill(undefined);
  const rows = [...transactions, ...emptyRows];

  return (
    <div className={css["transaction-table-wrapper"]}>
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
