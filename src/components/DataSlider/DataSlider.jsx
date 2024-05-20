import React, { useState } from 'react';
import { format, addMonths } from 'date-fns';
import css from './DataSlider.module.css'
import { useTranslation } from 'react-i18next';

function DataSlider() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevious = () => {
        setCurrentDate(prevDate => addMonths(prevDate, -1));
    };

    const handleNext = () => {
        setCurrentDate(prevDate => addMonths(prevDate, 1));
    };

    const formatDate = date => {
        return format(date, 'MMMM yyyy ');
    };
    const {t} =useTranslation();
    
    return (
        <div className={css["data-slider"]}>
            <button onClick={handlePrevious}>{'<'}</button>
            <div className={css['text']}>
            <span>{t('CurrentPeriod')}:</span>
            <span className={css['data-text']}>{formatDate(currentDate)}</span>
            </div>
            <button onClick={handleNext}>{'>'}</button>
        </div>
    );
}

export default DataSlider;
