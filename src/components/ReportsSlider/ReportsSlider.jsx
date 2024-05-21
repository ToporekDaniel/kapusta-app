import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ReportsSlider.module.css'; // Upewnij się, że ścieżka jest poprawna

const DataSlider = ({ current }) => {
  return (
    <div className={css.slider}>
      <NavLink to="/reports/expenses"
               className={({ isActive }) => isActive ? css.active : ''}
               activeClassName={css.active}>
        Expenses
      </NavLink>
      <NavLink to="/reports/income"
               className={({ isActive }) => isActive ? css.active : ''}
               activeClassName={css.active}>
        Income
      </NavLink>
    </div>
  );
};

export default DataSlider;
