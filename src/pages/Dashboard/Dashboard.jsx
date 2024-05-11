// import React from 'react';
import PropTypes from 'prop-types';
import Balance from '../../components/Balance/Balance'; 
import Reports from '../Reports/Reports';
import summaryTable from '../../components/summaryTable/summaryTable.jsx';

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
      <summaryTable data= {data} />
    </div>
  );
}

summaryTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    monthName: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired
};

export default Dashboard;
