import React from 'react';
import Balance from '../../components/Balance/Balance'; 
import Reports from '../Reports/Reports';
import SummaryTable from '../../components/SummaryTable/SummaryTable.jsx';

const data =[{ monthName: "January, value: 100"},
{ monthName: "February", value: 100},
{ monthName: "March", value: 100},
{ monthName: "January", value: 100},
{ monthName: "January", value: 100},
{ monthName: "January", value: 100},
]

function Dashboard() {
  return (
    <div>
      <Balance />
      <Reports />
      <SummaryTable data= {data} />
    </div>
  );
}


export default Dashboard;
