import css from "./SummaryTable.module.css";

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

export default SummaryTable;
