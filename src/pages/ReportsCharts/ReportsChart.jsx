import React from 'react';
import { useFinance } from '../../../contexts/FinanceContext'; 
import Balance from '../../components/Balance/Balance';
import './ReportsChart.css'


function ReportsChart() {
    const { expenses, income } = useFinance();

    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className='reports-chart-container'>
            <Balance className="balance-container" />
            <div className="header">
                <p>Expenses: {totalExpenses}</p>
                <p>Incomes: {totalIncome}</p>
            </div>


        </div>
    );
}

export default ReportsChart;
