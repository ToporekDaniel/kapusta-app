import { useTranslation } from "react-i18next";
import css from "./SummaryTable.module.css";
import PropTypes from "prop-types";

function SummaryTable({ summaryData }) {
  const {t} = useTranslation();
  return (
    <div className={css["summary"]}>
      <h2 className={css["summary-title"]}>{t("SUMMARY")}</h2>
      <ul className={css["summary-list"]}>
        {summaryData.map((item, index) => (
          <li key={index} className={css["summary-item"]}>
            <p>{t(item.month)}</p>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

SummaryTable.propTypes = {
  summaryData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SummaryTable;
