import React, { useState, useEffect } from 'react';
// import './Balance.css';  // Zakomentowane dla czytelności, odkomentuj w swoim projekcie

function Balance({ expenses, income }) {
  const [balance, setBalance] = useState(0);
  const [inputBalance, setInputBalance] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);  // Dla komunikatu z tooltipem

  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setBalance(calculatedBalance);
    setInputBalance(calculatedBalance.toFixed(2));
  }, [expenses, income]);

  const handleConfirm = () => {
    if (parseFloat(inputBalance) === 0) {
      setShowTooltip(true);  // Pokaż tooltip, jeśli saldo jest 0
      setTimeout(() => setShowTooltip(false), 3000);  // Automatycznie ukryj tooltip po 3 sekundach
    } else {
      setBalance(parseFloat(inputBalance));
      setShowTooltip(false);  // Ukryj tooltip
      alert('Balance confirmed: ' + inputBalance + ' UAH');
      // saveBalanceToDatabase();  // Zakomentowane dla przykładu
    }
  };

  const handleInputChange = (e) => {
    setInputBalance(e.target.value);
    if (parseFloat(e.target.value) !== 0) {
      setShowTooltip(false);  // Ukryj tooltip, jeśli saldo nie jest 0
    }
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
      {showTooltip && (
        <div className="tooltip">
          <span>Hello! To get started, enter the current balance of your account!
          </span>
          <span>You can't spend money until you have it :) </span>     </div>
      )}
      <button
        className="confirm-button"
        onClick={handleConfirm}
        disabled={parseFloat(inputBalance) === 0}
      >
        CONFIRM
      </button>
    </div>
  );
}

export default Balance;
