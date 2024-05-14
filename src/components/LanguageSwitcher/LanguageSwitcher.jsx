import i18n from 'i18n';
import english from '../Header/img/en.png';
import polish from '../Header/img/pl.png';
import s from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className={s.loclIcon} onClick={() => changeLanguage('en')}>
        <img className={s.icon} src={english} alt="" width="30" />
      </button>
      <button className={s.loclIcon} onClick={() => changeLanguage('pl')}>
        <img className={s.icon} src={polish} alt="" width="30" />
      </button>
    </div>
  );
}
