import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Home from '../pages/Home.jsx';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from "./App.jsx";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(

      <BrowserRouter>
      <Provider store={store}>
        <App/>
        </Provider>
      </BrowserRouter>

);