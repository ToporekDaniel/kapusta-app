import css from './ExpensesCategories.module.css';
import ProductsIcon from '../../assets/icons/products.svg?react'

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
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>alcohol</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>entertainment</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>health</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>transport</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>housing</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>technique</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>communal communication</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>sports, hobbies</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>education</span>
                </li>
                <li className={css['product-card']}>
                    <p className={css['text']}>quantity</p>
                    <ProductsIcon className={css["icon"]} />
                    <span className={css['text']}>other</span>
                </li>
            </ul>
        </div>
    )
}

export default ExpensesCategories;