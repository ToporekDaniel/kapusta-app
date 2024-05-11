import React from 'react';
import Balance from '../../components/Balance/Balance'; 
import Reports from '../Reports/Reports';
import SummaryTable from '../../components/SummaryTable/SummaryTable.jsx';

function Dashboard() {
  return (
    <div>
      <Balance />
      <Reports />
      <SummaryTable />
    </div>
  );
}

export default Dashboard;
