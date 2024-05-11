import React from 'react';
import Balance from '../../components/Balance/Balance'; 
import Reports from '../Reports/Reports';
import FormTransaction from '../../components/FormTransaction/FormTransaction.jsx'; 
function Dashboard() {
  return (
    <div>
      <Balance />
      <Reports />
      <FormTransaction />
    </div>
  );
}

export default Dashboard;
