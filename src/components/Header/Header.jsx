import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Children } from 'react';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link to="/" alt="homepage">
            <img src='' alt=''/>
          </Link>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </header>
      {Children}
    </>
  );
};
export default Header;
