import React from 'react';
import Balance from '../Balance/Balance'; 
import Reports from '../Reports/Reports';
function Dashboard({ expenses, income }) {
  return (
    <div>
      <Balance expenses={expenses} income={income} />
      <Reports />
    </div>
  );
}

export default Dashboard;
