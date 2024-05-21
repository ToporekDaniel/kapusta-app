import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFinance } from '../../../contexts/FinanceContext';
import IncomeChart from '../../components/IncomeChart/IncomeChart'; 
import css from './IncomeReport.module.css';

function IncomeReport() {
  const { income } = useFinance();
  const [chartData, setChartData] = useState([]);
  const { categoryName } = useParams(); 

  useEffect(() => {
    if (categoryName) {
      const filteredData = income.filter(inc => inc.category === categoryName);
      const dataForChart = filteredData.map(inc => ({
        category: inc.category,
        amount: inc.amount,
      }));
      setChartData(dataForChart);
    } else {
      setChartData([]);
    }
  }, [income, categoryName]);

  return (
    <div className={css['income-report']}>
      <h1>{categoryName} Income</h1>
      {chartData.length > 0 ? (
        <IncomeChart data={chartData} />
      ) : (
        <p>No data available for this category.</p>
      )}
    </div>
  );
}

export default IncomeReport;
