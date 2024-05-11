import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expensesResponse = await axios.get('/expenses');
        // setExpenses(expensesResponse.data);

        const incomeResponse = await axios.get('/income');
        // setIncome(incomeResponse.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await axios.post('/expenses', expense);
      // setExpenses(prev => [...prev, response.data]);
    } catch (error) {
      console.error("Failed to post expense:", error);
    }
  };

  const addIncome = async (income) => {
    try {
      const response = await axios.post('/income', income);
      // setIncome(prev => [...prev, response.data]);
    } catch (error) {
      console.error("Failed to post income:", error);
    }
  };

  return (
    <FinanceContext.Provider value={{ expenses, addExpense, income, addIncome }}>
      {children}
    </FinanceContext.Provider>
  );
};
