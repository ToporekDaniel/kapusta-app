import React from 'react';
import css from './ExpensesCategories.module.css';
import ProductsIcon from '../../assets/icons/products.svg?react';
import AlcoholIcon from '../../assets/icons/alcohol.svg?react';
import KiteIcon from '../../assets/icons/kite.svg?react';
import HealthIcon from '../../assets/icons/health.svg?react';
import CarIcon from '../../assets/icons/car.svg?react';
import CoachIcon from '../../assets/icons/coach.svg?react';
import ToolsIcon from '../../assets/icons/tools.svg?react';
import ReceiptIcon from '../../assets/icons/receipt.svg?react';
import ClayIcon from '../../assets/icons/clay.svg?react';
import BookIcon from '../../assets/icons/book.svg?react';
import UfoIcon from '../../assets/icons/ufo.svg?react';
import { useTranslation } from 'react-i18next';

function ExpensesCategories({ onCategorySelect }) {
    const {t} = useTranslation();
    const categories = [
        { name: 'Products', Icon: ProductsIcon, quantity: 5000 },
        { name: 'Alcohol', Icon: AlcoholIcon, quantity: 3000 },
        { name: 'Entertainment', Icon: KiteIcon, quantity: 2400 },
        { name: 'Health', Icon: HealthIcon, quantity: 2200 },
        { name: 'Transport', Icon: CarIcon, quantity: 2000 },
        { name: 'Housing', Icon: CoachIcon, quantity: 1800 },
        { name: 'Technique', Icon: ToolsIcon, quantity: 1500 },
        { name: 'Communal communication', Icon: ReceiptIcon, quantity: 900 },
        { name: 'Sports, hobbies', Icon: ClayIcon, quantity: 800 },
        { name: 'Education', Icon: BookIcon, quantity: 800 },
        { name: 'Other', Icon: UfoIcon, quantity: 200 },
    ];

    return (
        <div className={css['expenses-categories']}>
            <ul className={css['products-container']}>
                {categories.map((category) => (
                    <li key={category.name} className={css['product-card']} onClick={() => onCategorySelect(category.name)}>
                        <p className={css['text']}>{category.quantity}</p>
                        <category.Icon className={css['icon']} />
                        <span className={css['text']}>{t(category.name)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpensesCategories;
