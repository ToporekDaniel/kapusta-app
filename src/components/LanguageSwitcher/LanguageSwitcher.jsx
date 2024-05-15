import { useTranslation } from 'react-i18next';
import english from '../Header/img/en.png';
import polish from '../Header/img/pl.png';
import s from './LanguageSwitcher.module.css';
import { useEffect } from 'react';

const languages = [
  {code: "en", lang: "english", src: english},
  {code: "pl", lang: "polish", src: polish},
]
export default function LanguageSwitcher() {

  const {i18n} = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
          className={s.loclIcon}
            onClick={() => changeLanguage(lng.code)}
          >
            <img className={s.icon} src={lng.src} alt="" width="30" /> 
          </button>
        );
      })}
    </div>
  );
  
}
