import { NavLink, Outlet } from 'react-router-dom';
import css from './ReportsSlider.module.css';

const ReportsSlider = () => {
  return (
    <div>
      <div className={css.slider}>
        <NavLink to="/reports/expenses"
                 className={({ isActive }) => isActive ? `${css.active}` : ''}>
          Expenses
        </NavLink>
        <NavLink to="/reports/income"
                 className={({ isActive }) => isActive ? `${css.active}` : ''}>
          Income
        </NavLink>
      </div>
      <Outlet /> 
    </div>
  );
};

export default ReportsSlider;