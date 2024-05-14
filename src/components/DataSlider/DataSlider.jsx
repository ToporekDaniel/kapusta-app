import React, { useState } from 'react';
import { format, addMonths } from 'date-fns';
import './DataSlider.css'

function DataSlider() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevious = () => {
        setCurrentDate(prevDate => addMonths(prevDate, -1));
    };

    const handleNext = () => {
        setCurrentDate(prevDate => addMonths(prevDate, 1));
    };

    const formatDate = date => {
        return format(date, 'MMMM yyyy');
    };

    return (
        <div className="data-slider">
            <button onClick={handlePrevious}>{'<'}</button>
            <div className='text'>
            <span>Current period:</span>
            <span className='data-text'>{formatDate(currentDate)}</span>
            </div>
            <button onClick={handleNext}>{'>'}</button>
        </div>
    );
}

export default DataSlider;
