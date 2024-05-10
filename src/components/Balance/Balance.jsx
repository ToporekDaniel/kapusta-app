import React, { useState, useEffect } from 'react';
import { useFinance } from '../../../contexts/FinanceContext';
// import './Balance.css';

function Balance() {
  const [balance, setBalance] = useState(0);
  const [inputBalance, setInputBalance] = useState('');
  const [showModal, setShowModal] = useState(false); 
const { expenses, income } = useFinance()
  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setBalance(calculatedBalance);
    setInputBalance(calculatedBalance.toFixed(2));
    setShowModal(calculatedBalance === 0); 
  }, [expenses, income]);

  const handleConfirm = () => {
    if (parseFloat(inputBalance) === 0) {
      setShowModal(true);
    } else {
      setBalance(parseFloat(inputBalance));
      setShowModal(false);
      alert('Balance confirmed: ' + inputBalance + ' UAH');
    }
  };

  const handleInputChange = (e) => {
    setInputBalance(e.target.value);
    setShowModal(parseFloat(e.target.value) === 0);
  };

  const closeModal = () => {
    setShowModal(false);
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Hello! To get started, enter the current balance of your account!!</p>
            <p>You can't spend money until you have it :)</p>
          </div>
        </div>
      )}
      <button className="confirm-button" onClick={handleConfirm} disabled={parseFloat(inputBalance) === 0}>
        CONFIRM
      </button>
    </div>
  );
}

export default Balance;
