import { useTranslation } from "react-i18next";
import css from "./SummaryTable.module.css";
import PropTypes from "prop-types";

function SummaryTable(props) {
  const {t} = useTranslation();
  return (
    <div className={css["summary"]}>
      <h2 className={css["summary-title"]}>{t("SUMMARY")}</h2>
      <ul className={css["summary-list"]}>
        {props.data.map((item, index) => (
          <li key={index} className={css["summary-item"]}>
            <p>{t(item.monthName)}</p>
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
