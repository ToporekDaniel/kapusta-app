import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFinance } from "../../../contexts/FinanceContext";
import ExpensesChart from "../../components/ExpensesChart/ExpensesChart";
import IncomeChart from "../../components/IncomeChart/IncomeChart"; 
// import ExpensesCategories from "../../components/ExpensesCategories/ExpensesCategories";
import Dashboard from "../../components/Dashboard/Dashboard";
import ReportsSlider from "../../components/ReportsSlider/ReportsSlider"; 
import css from "./ReportsChart.module.css";

function ReportsChart() {
  const { expenses, income } = useFinance();
  const [chartData, setChartData] = useState([]);
  const { categoryName, reportType } = useParams();  

  useEffect(() => {
    if (reportType === "expenses" && categoryName) {
      const filteredData = expenses.filter(exp => exp.category === categoryName);
      setChartData(filteredData.map(exp => ({
        category: exp.category,
        amount: exp.amount,
      })));
    } else if (reportType === "income" && categoryName) {
      const filteredData = income.filter(inc => inc.category === categoryName);
      setChartData(filteredData.map(inc => ({
        category: inc.category,
        amount: inc.amount,
      })));
    } else {
      setChartData([]);
    }
  }, [expenses, income, categoryName, reportType]);

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={css["reports-chart-container"]}>
      <Dashboard />
      <div className={css["header-reports-total"]}>
        <p>Expenses: {totalExpenses}</p>
        <p>Incomes: {totalIncome}</p>
      </div>
      <ReportsSlider />

      {/* <ExpensesCategories /> */}
      {categoryName && reportType === "expenses" && <ExpensesChart data={chartData} />}
      {categoryName && reportType === "income" && <IncomeChart data={chartData} />}
    </div>
  );
}

export default ReportsChart;
