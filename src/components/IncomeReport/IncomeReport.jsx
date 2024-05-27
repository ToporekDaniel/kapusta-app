import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useFinance } from '../../../contexts/FinanceContext';
import css from './IncomeReport.module.css';
import SalaryIcon from '../../assets/icons/salary.svg?react';
import AddIncomeIcon from '../../assets/icons/addIncome.svg?react';
import IncomeChart from '../IncomeChart/IncomeChart';

function IncomeReport({ onCategorySelect }) {
    const { income } = useFinance();
    const [chartData, setChartData] = useState([]);
    const { categoryName } = useParams();

    const categories = [
        { name: 'Salary', Icon: SalaryIcon, quantity: 45000 },
        { name: 'Add. Income', Icon: AddIncomeIcon, quantity: 1500 },
    ];
    useEffect(() => {
        if (categoryName) {
            const filteredData = income.filter(inc => inc.category === categoryName);
            console.log(filteredData);
            setChartData(filteredData.map(inc => ({
                category: inc.category,
                amount: inc.amount,
            })));
        } else {
            setChartData([]);
        }
    }, [income, categoryName]);

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
                
            </div>
            <div>
               
               <IncomeChart data={chartData} />
          
       </div>
        </div>
    );
}

export default IncomeReport;
