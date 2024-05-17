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
        CONFIRM: 'CONFIRM',
        FormTransactionPlaceholder: 'Product description',
        ProductCategory: "Product category",
        Transport: 'Transport',
        Products: 'Products',
        Health: 'Health',
        Alcohol: 'Alcohol',
        Entertainment: "Entertainment",
        Housing: 'Housing',
        Technique: 'Technique',
        Communal: 'Communal, communication',
        Education: "Education",
        Other: 'Other',
        INPUT: "INPUT",
        CLEAR: 'CLEAR',
        SUMMARY: 'summary',
        Date: 'date',
        Description: 'descreiption',
        Category: 'category',
        Sum: 'sum',
        Reports: 'Reports'
      },
    },
    pl: {
      translation: {
        balance: 'Balans:',
        firstBalanceP: 'Cześć! Aby rozpocząć, podaj aktualny stan swojego konta!',
        secondBalanceP: "Nie możesz wydawać pieniędzy, dopóki ich nie masz :)",
        CONFIRM: 'ZATWIERDŹ',
        FormTransactionPlaceholder: 'Opis produktu',
        ProductCategory: "Kategoria produktu",
        Transport: 'Transport',
        Products: 'Produkty',
        Health: 'Zdrowie',
        Alcohol: 'Alkohol',
        Entertainment: "Rozrywka",
        Housing: 'Mieszkalnictwo',
        Technique: 'Technika',
        Communal: 'Wspólnota, Komunikacja',
        Education: "Edukacja",
        Other: 'Inne',
        INPUT: "WPROWADŹ",
        CLEAR: 'WYCZYŚĆ',
        SUMMARY: 'podsumowanie',
        Date: 'data',
        Description: 'opis',
        Category: 'kategoria',
        Sum: 'suma',
        Reports: 'Raporty'
      },
    },
  },
});

export default i18n;