import css from "./SummaryTable.module.css";
import PropTypes from "prop-types";

function SummaryTable(props) {
  return (
    <div className={css["summary"]}>
      <h2 className={css["summary-title"]}>summary</h2>
      <ul className={css["summary-list"]}>
        {props.data.map((item, index) => (
          <li key={index} className={css["summary-item"]}>
            <p>{item.monthName}</p>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

SummaryTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      monthName: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SummaryTable;
