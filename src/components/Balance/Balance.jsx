import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableInput } from '../../app/store'
import { useFinance } from '../../../contexts/FinanceContext';

function Balance() {
  const [inputBalance, setInputBalance] = useState('');
  const { expenses, income } = useFinance();
  const inputDisabled = useSelector(state => state.balance.inputDisabled);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const totalIncome = income.reduce((acc, income) => acc + income.amount, 0);
    const calculatedBalance = totalIncome - totalExpenses;
    setInputBalance(calculatedBalance.toFixed(2));
  }, [expenses, income]);

  const handleConfirm = () => {
    if (parseFloat(inputBalance) === 0) {
      setShowModal(true);
    } else {
      alert('Balance confirmed: ' + inputBalance + 'PLN');
      dispatch(disableInput());
      setShowModal(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setInputBalance(value);
      setShowModal(false);
    }
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
        disabled={inputDisabled}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Hello! To get started, enter the current balance of your account!</p>
            <p>You can't spend money until you have it :)</p>
          </div>
        </div>
      )}
      {!inputDisabled && (
        <button className="confirm-button" onClick={handleConfirm}>
          CONFIRM
        </button>
      )}
    </div>
  );
}

export default Balance;
