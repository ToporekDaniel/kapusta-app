import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableInput } from '../../app/store';
import { useFinance } from '../../../contexts/FinanceContext';
import Button from '../Button/Button';
import './Balance.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Backspace from "../../assets/icons/backspace.svg?react";
import DataSlider from '../DataSlider/DataSlider';


function Balance() {
  const [inputBalance, setInputBalance] = useState('');
  const { expenses, income } = useFinance();
  const inputDisabled = useSelector(state => state.balance.inputDisabled);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className='back-to-home-link-container'>
        {location.pathname !== '/' && (
        <Link to="/">
          <Backspace />
         <p className='text'>Main Page</p>
         </Link> 
      )}
      </div>
      <label className="balance-label text">Balance:</label>
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
   {location.pathname !== '/' && (
       <DataSlider />
      )}
    </div>
  );
}

export default Balance;
