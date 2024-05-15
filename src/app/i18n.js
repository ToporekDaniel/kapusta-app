import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.use(Backend)
.init({
  debug: true,
  lng: "en",
  resources: {
    en: {
      translation: {
        balance: 'Balance:',
        firstBalanceP: 'Hello! To get started, enter the current balance of your account!',
        secondBalanceP: "You can't spend money until you have it :)",
        FormTransactionPlaceholder: 'Product description',
        ProductCategory: "Product category",
        Transport: 'Transport',
        Products: 'Products',
      },
    },
    pl: {
      translation: {
        balance: 'Balans:',
        firstBalanceP: 'Cześć! Aby rozpocząć, podaj aktualny stan swojego konta!',
        secondBalanceP: "Nie możesz wydawać pieniędzy, dopóki ich nie masz :)",
        FormTransactionPlaceholder: 'Opis produktu',
        ProductCategory: "Kategoria produktu",
        Transport: 'Transport',
        Products: 'Produkty',
      },
    },
  },
});

export default i18n;