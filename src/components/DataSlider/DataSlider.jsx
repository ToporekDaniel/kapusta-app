import React, { useState } from 'react';
import { format, addMonths } from 'date-fns';
import css from './DataSlider.module.css'

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
        <div className={css["data-slider"]}>
            <button onClick={handlePrevious}>{'<'}</button>
            <div className={css['text']}>
            <span>Current period:</span>
            <span className={css['data-text']}>{formatDate(currentDate)}</span>
            </div>
            <button onClick={handleNext}>{'>'}</button>
        </div>
    );
}

export default DataSlider;