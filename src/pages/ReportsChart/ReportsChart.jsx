import { useEffect, useState } from "react";
import { useFinance } from "../../../contexts/FinanceContext";
import ExpensesChart from "../../components/ExpensesChart/ExpensesChart";
import ExpensesCategories from "../../components/ExpensesCategories/ExpensesCategories";
import Dashboard from "../../components/Dashboard/Dashboard";
import css from "./ReportsChart.module.css";

function ReportsChart() {
  const { expenses, income } = useFinance();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const data = expenses
        .filter((exp) => exp.category === selectedCategory)
        .map((exp) => ({
          category: exp.category,
          amount: exp.amount,
        }));
      setChartData(data);
    } else {
      setChartData([]);
    }
  }, [expenses, selectedCategory]);

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={css["reports-chart-container"]}>
      <div className={css["background-top"]}></div>
      <div className={css["background-bottom"]}></div>
      <div className={css["reports-container"]}>
        <Dashboard />
        <div className={css["header-reports-total"]}>
          <ul className={css["header-reports-list"]}>
            <li className={css["header-reports-item"]}>
              Expenses:<span className={css["text-red"]}>{totalExpenses}</span>
            </li>
            <div className={css["header-reports-div"]}></div>
            <li className={css["header-reports-item"]}>
              Income:<span className={css["text-green"]}>{totalIncome}</span>
            </li>
          </ul>
        </div>
        <ExpensesCategories onCategorySelect={handleCategorySelect} />
      </div>
      {selectedCategory && <ExpensesChart data={chartData} />}
    </div>
  );
}

export default ReportsChart;
