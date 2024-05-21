import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useFinance } from '../../../contexts/FinanceContext';
import IncomeChart from '../../components/IncomeChart/IncomeChart';
import css from './IncomeReport.module.css';
import SalaryIcon from '../../assets/icons/salary.svg?react';
import AddIncomeIcon from '../../assets/icons/addIncome.svg?react';

function IncomeReports() {
    const { incomes } = useFinance();
    const [chartData, setChartData] = useState([]);
    const { categoryName } = useParams();

    const categories = [
        { name: 'Salary', Icon: SalaryIcon, quantity: 45000 },
        { name: 'Add. Income', Icon: AddIncomeIcon, quantity: 1500 },
    ];

    useEffect(() => {
        if (categoryName) {
            const filteredData = incomes.filter(inc => inc.category === categoryName);
            setChartData(filteredData.map(inc => ({
                category: inc.category,
                amount: inc.amount,
            })));
        } else {
            setChartData([]);
        }
    }, [incomes, categoryName]);

    return (
        <div className={css['income-report-wrapper']}>
            <div className={css['income-report']}>
                <ul className={css['products-container']}>
                    {categories.map((category) => (
                        <li key={category.name} className={css['product-card']}>
                            <NavLink
                                to={`/reports/income/${category.name}`}
                                className={({ isActive }) => isActive ? `${css['active']} ${css['category']}` : css['category']}
                            >
                                <p className={css['text']}>{category.quantity}</p>
                                {category.Icon && <category.Icon className={css['icon']} />}
                                <span className={css['text']}>{category.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div>
                    {chartData.length > 0 ? (
                        <IncomeChart data={chartData} />
                    ) : (
                        <p>No data available for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IncomeReports;
