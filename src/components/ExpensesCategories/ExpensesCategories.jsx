import css from './ExpensesCategories.module.css';
import ProductsIcon from '../../assets/icons/products.svg?react'
import AlcoholIcon from '../../assets/icons/alcohol.svg?react'
import KiteIcon from '../../assets/icons/kite.svg?react'
import HealthIcon from '../../assets/icons/health.svg?react'
import CarIcon from '../../assets/icons/car.svg?react'
import CoachIcon from '../../assets/icons/coach.svg?react'
import ToolsIcon from '../../assets/icons/tools.svg?react'
import ReceiptIcon from '../../assets/icons/receipt.svg?react'
import ClayIcon from '../../assets/icons/clay.svg?react'
import BookIcon from '../../assets/icons/book.svg?react'
import UfoIcon from '../../assets/icons/ufo.svg?react'





function ExpensesCategories() {
    return (
        <div>
            <ul className={css['products-container']}>
                <li className={css["product-card"]}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>products</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <AlcoholIcon className={css["icon"]} />
                    <span className={css['text']}>alcohol</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <KiteIcon className={css["icon"]} />
                    <span className={css['text']}>entertainment</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <HealthIcon className={css["icon"]} />
                    <span className={css['text']}>health</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <CarIcon className={css["icon"]} />
                    <span className={css['text']}>transport</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <CoachIcon className={css["icon"]} />
                    <span className={css['text']}>housing</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ToolsIcon className={css["icon"]} />
                    <span className={css['text']}>technique</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ReceiptIcon className={css["icon"]} />
                    <span className={css['text']}>communal communication</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ClayIcon className={css["icon"]} />
                    <span className={css['text']}>sports, hobbies</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <BookIcon className={css["icon"]} />
                    <span className={css['text']}>education</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <UfoIcon className={css["icon"]} />
                    <span className={css['text']}>other</span>
                </li>
            </ul>
        </div>
    )
}

export default ExpensesCategories;