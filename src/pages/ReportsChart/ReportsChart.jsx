import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFinance } from "../../../contexts/FinanceContext";
import ExpensesChart from "../../components/ExpensesChart/ExpensesChart";
import ExpensesCategories from "../../components/ExpensesCategories/ExpensesCategories";
import Dashboard from "../../components/Dashboard/Dashboard";
import css from "./ReportsChart.module.css";

function ReportsChart() {
  const { expenses, income } = useFinance();
  const [chartData, setChartData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log("Full Expenses Data:", expenses); 
    if (categoryName) {
      const filteredData = expenses.filter((exp) => exp.category === categoryName);
      console.log(`Data for category ${categoryName}:`, filteredData);
      const chartData = filteredData.map((exp) => ({
        category: exp.category,
        amount: exp.amount,
      }));
      setChartData(chartData);
    } else {
      setChartData([]);
    }
  }, [expenses, categoryName]);

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={css["reports-chart-container"]}>
      <Dashboard />
      <div>
        <p>Expenses: {totalExpenses}</p>
        <p>Incomes: {totalIncome}</p>
      </div>
      <ExpensesCategories />
      {categoryName && <ExpensesChart data={chartData} />}
    </div>
  );
}

export default ReportsChart;
