import React, { useEffect, useState } from 'react';
import { useFinance } from '../../../contexts/FinanceContext'; 
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import ExpensesCategories from '../../components/ExpensesCategories/ExpensesCategories';
import Dashboard from '../../components/Dashboard/Dashboard';
import css from './ReportsChart.module.css';

function ReportsChart() {
    const { expenses, income } = useFinance();

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const data = expenses.map(exp => ({
            category: exp.category,
            amount: exp.amount
        }));
        setChartData(data);
    }, [expenses]);

    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className={css['reports-chart-container']}>
            <div className={css['reports-container']}>
            <Dashboard />
            <div className={css['header-reports-chart']}>
                <p>Expenses: {totalExpenses}</p>
                <p>Incomes: {totalIncome}</p>
            </div>
            <ExpensesCategories />
            </div>
            <ExpensesChart data={chartData} /> 
        </div>
    );
}

export default ReportsChart;
