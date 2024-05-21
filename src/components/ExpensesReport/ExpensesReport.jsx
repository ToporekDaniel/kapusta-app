import { useEffect, useState } from 'react';
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
            setChartData(filteredData.map(exp => ({
                category: exp.category,
                amount: exp.amount,
            })));
        } else {
            setChartData([]);
        }
    }, [expenses, categoryName]);

    return (
        <div className={css['expenses-report-wrapper']}>
            <div className={css['expenses-report']}>
                <ul className={css['products-container']}>
                    {categories.map((category) => (
                        <li key={category.name} className={css['product-card']}>
                            <NavLink
                                to={`/reports/expenses/${category.name}`}
                                className={({ isActive }) => isActive ? `${css['active']} ${css['category']}` : css['category']}
                            >
                                <p className={css['text']}>{category.quantity}</p>
                                {category.Icon && <category.Icon className={css['icon']} />}
                                <span className={css['text']}>{category.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
             
            </div>
            <div>
                    {chartData.length > 0 ? (
                        <ExpensesChart data={chartData} />
                    ) : (
                        <p>No data available for this category.</p>
                    )}
                </div>
        </div>
    );
}

export default ExpensesReport;
