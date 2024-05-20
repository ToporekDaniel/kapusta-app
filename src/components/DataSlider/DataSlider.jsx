import { useState } from "react";
import { format, addMonths } from "date-fns";
import css from "./DataSlider.module.css";

function DataSlider() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevious = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, -1));
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const formatDate = (date) => {
    return format(date, "MMMM yyyy");
  };

  return (
    <div className={css["date-wrapper"]}>
      <div className={css["text"]}>Current period:</div>
      <div className={css["date-slider"]}>
        <button onClick={handlePrevious}>{"<"}</button>
        <span className={css["date-text"]}>{formatDate(currentDate)}</span>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
}

export default DataSlider;
