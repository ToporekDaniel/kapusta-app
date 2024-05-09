import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Home from '../pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
);