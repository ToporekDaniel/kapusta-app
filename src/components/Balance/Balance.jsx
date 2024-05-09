import { useState, useEffect } from 'react';

function Balance({ expenses, income }) {
  const [balance, setBalance] = useState(0);
  const [inputBalance, setInputBalance] = useState('');
  const [showTooltip, setShowTooltip] = useState(false); 

  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setBalance(calculatedBalance);
    setInputBalance(calculatedBalance.toFixed(2));
    setShowTooltip(calculatedBalance === 0);  
  }, [expenses, income]);

  const handleConfirm = () => {
    setBalance(parseFloat(inputBalance));
    setShowTooltip(false); 
    alert('Balance confirmed: ' + inputBalance + ' UAH');
    // saveBalanceToDatabase();
  };

  const handleInputChange = (e) => {
    setInputBalance(e.target.value);
    setShowTooltip(!e.target.value);  
  };

  return (
    <div className="balance-container">
      <label className="balance-label">Balance:</label>
      <input
        type="text"
        className="balance-value"
        value={inputBalance}
        onChange={handleInputChange}
        onFocus={() => setShowTooltip(true)}  
        onBlur={() => setShowTooltip(false)}  
      />
      {showTooltip && <div className="tooltip">Hello! To get started, enter the current balance of your account! You can't spend money until you have it :)</div>}
      <button className="confirm-button" onClick={handleConfirm}>CONFIRM</button>
    </div>
  );
}

export default Balance;
