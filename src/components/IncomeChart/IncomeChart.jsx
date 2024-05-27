import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.category),
        datasets: [
            {
                label: 'Amount',
                data: data.map(item => item.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default IncomeChart;
