// import React from 'react';
import PropTypes from "prop-types";
import Balance from "../../components/Balance/Balance";
import Reports from "../Reports/Reports";
import SummaryTable from "../../components/SummaryTable/SummaryTable";

const data = [
  { monthName: "January", value: 222 },
  { monthName: "February", value: 100 },
  { monthName: "March", value: 333 },
  { monthName: "January", value: 10 },
  { monthName: "January", value: 8 },
  { monthName: "January", value: 100 },
];

function Dashboard() {
  return (
    <div>
      <Balance />
      <Reports />
      <SummaryTable data={data} />
    </div>
  );
}

SummaryTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      monthName: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Dashboard;
