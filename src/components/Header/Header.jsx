import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link to="/" alt="homepage" className={styles.logo}>
            
              <p className={styles.logoSquare}></p>
              <span className={styles.logoText}>Kapu$ta</span>
            
          </Link>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </header>
    </>
  );
};
export default Header;
