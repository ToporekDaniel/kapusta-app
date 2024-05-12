import React from 'react';
import Balance from '../../components/Balance/Balance'; 
import Reports from '../Reports/Reports';
import './Dashboard.css';
function Dashboard() {
  return (
    <div className='dashboard'>
      <Balance />
      <Reports />
    </div>
  );
}

export default Dashboard;
