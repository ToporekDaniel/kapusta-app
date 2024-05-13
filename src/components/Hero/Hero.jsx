// import './Dashboard.css';

import PropTypes from "prop-types";

import SummaryTable from "../../components/SummaryTable/SummaryTable";
import FormTransaction from "../FormTransaction/FormTransaction";

//przykładowe dane do wyświetlenia w tabeli
//finalnie powinny być zaciągane przez serwer
const data = [
    { monthName: "January", value: 222 },
    { monthName: "February", value: 100 },
    { monthName: "March", value: 333 },
    { monthName: "January", value: 10 },
    { monthName: "January", value: 8 },
    { monthName: "January", value: 100 },
];

function Hero() {
    return (
        <div className='hero'>
            <FormTransaction />
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

export default Hero;
