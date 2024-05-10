import React from "react";
import styles from "../css/SummaryTable.module.css";

function SummaryTable({ data }) {
  return (
    <div className={styles.Summary}>
      <h2 className={styles.SummaryTitle}>summary</h2>
      <ul className={styles.SummaryList}>
        {data.map((item, index) => (
          <li key={index} className={styles.SummaryItem}>
            <p>{item.monthName}</p>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
