import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ExpensesChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      label: 'Expenses',
      data: data.map(item => item.amount),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
      ],
      borderColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
      ],
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
    }]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#666666'
        }
      },
      y: {
        grid: {
          color: '#e7e7e7'
        },
        ticks: {
          color: '#666666'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#333333',
        bodyColor: '#666666',
        borderWidth: 1,
        borderColor: '#dddddd'
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default ExpensesChart;
