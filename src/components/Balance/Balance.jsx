import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableInput } from '../../app/store';
import { useFinance } from '../../../contexts/FinanceContext';
import Button from './UI/Button/Button';

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

    setShowModal(calculatedBalance === 0);
  }, [expenses, income]);

  const handleConfirm = () => {
    const numBalance = parseFloat(inputBalance);
    if (numBalance === 0) {
      setShowModal(true);
    } else {
      alert('Balance confirmed: ' + numBalance + ' PLN');
      dispatch(disableInput());
      setShowModal(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputBalance(value);
    setShowModal(!value || parseFloat(value) === 0);
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
            <p>Hello! To get started, enter the current balance of your account!</p>
            <p>You can't spend money until you have it :)</p>
          </div>
        </div>
      )}
      {!inputDisabled && (
        <Button className="confirm-button" onClick={handleConfirm} text="CONFIRM"/>
      )}
    </div>
  );
}

export default Balance;