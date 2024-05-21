import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useFinance } from '../../../contexts/FinanceContext';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import css from './ExpensesReport.module.css';
import ProductsIcon from '../../assets/icons/products.svg?react';
import AlcoholIcon from '../../assets/icons/alcohol.svg?react';
import KiteIcon from '../../assets/icons/kite.svg?react';
import HealthIcon from '../../assets/icons/health.svg?react';
import CarIcon from '../../assets/icons/car.svg?react';
import CoachIcon from '../../assets/icons/coach.svg?react';
import ToolsIcon from '../../assets/icons/tools.svg?react';
import ReceiptIcon from '../../assets/icons/receipt.svg?react';
import ClayIcon from '../../assets/icons/clay.svg?react';
import BookIcon from '../../assets/icons/book.svg?react';
import UfoIcon from '../../assets/icons/ufo.svg?react';

function ExpensesReport() {
    const { expenses } = useFinance();
    const [chartData, setChartData] = useState([]);
    const { categoryName } = useParams();

    const categories = [
        { name: 'Products', Icon: ProductsIcon, quantity: 5000 },
        { name: 'Alcohol', Icon: AlcoholIcon, quantity: 3000 },
        { name: 'Entertainment', Icon: KiteIcon, quantity: 2400 },
        { name: 'Health', Icon: HealthIcon, quantity: 2200 },
        { name: 'Transport', Icon: CarIcon, quantity: 2000 },
        { name: 'Housing', Icon: CoachIcon, quantity: 1800 },
        { name: 'Technique', Icon: ToolsIcon, quantity: 1500 },
        { name: 'Communal communication', Icon: ReceiptIcon, quantity: 900 },
        { name: 'Sports, hobbies', Icon: ClayIcon, quantity: 800 },
        { name: 'Education', Icon: BookIcon, quantity: 800 },
        { name: 'Other', Icon: UfoIcon, quantity: 200 },
    ];

    useEffect(() => {
        if (categoryName) {
            const filteredData = expenses.filter(exp => exp.category === categoryName);
            const dataForChart = filteredData.map(exp => ({
                category: exp.category,
                amount: exp.amount,
            }));
            setChartData(dataForChart);
        } else {
            setChartData([]);
        }
    }, [expenses, categoryName]);

    return (
        <div className={css['expenses-report']}>
            <h1>{categoryName ? `${categoryName} Expenses` : "Expenses"}</h1>
            <div className={css['categories-container']}>
                {categories.map((category) => (
                    <NavLink
                        key={category.name}
                        to={`/reports/expenses/${category.name}`}
                        className={({ isActive }) => isActive ? `${css['active']} ${css['category']}` : css['category']}
                    >
                        {category.Icon && <category.Icon />}
                        <p>{category.name}</p>
                        <span>{category.quantity}</span>
                    </NavLink>
                ))}
            </div>
         <ExpensesChart data={chartData} /> 
        </div>
    );
}

export default ExpensesReport;
