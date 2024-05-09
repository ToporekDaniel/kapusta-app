import React, { useState, useEffect } from 'react';
// import './Balance.css';

function Balance({ expenses, income }) {
  const [balance, setBalance] = useState(0);
  const [inputBalance, setInputBalance] = useState('');  

  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setBalance(calculatedBalance);
    setInputBalance(calculatedBalance.toFixed(2));  
  }, [expenses, income]);

  const handleConfirm = () => {
    setBalance(parseFloat(inputBalance));  
    alert('Balance confirmed: ' + inputBalance + ' UAH');
    saveBalanceToDatabase(); 
  };

  const handleInputChange = (e) => {
    setInputBalance(e.target.value);  
  };

  return (
    <div className="balance-container">
      <label className="balance-label">Balance:</label>
      <input
        type="text"
        className="balance-value"
        value={inputBalance}
        onChange={handleInputChange}
      />
      <button className="confirm-button" onClick={handleConfirm}>CONFIRM</button>
    </div>
  );
}

export default Balance;
