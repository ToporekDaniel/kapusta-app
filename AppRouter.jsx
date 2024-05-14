import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./src/pages/Dashboard/Dashboard";
import Reports from "./src/pages/Reports/Reports";
import { FinanceProvider } from "./contexts/FinanceContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './src/pages/Dashboard/Dashboard';
import Reports from './src/pages/Reports/Reports';
import { FinanceProvider } from './contexts/FinanceContext';
import HomePage from './src/components/HomePage/HomePage';

const AppRouter = () => {
  return (
    <FinanceProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
   </FinanceProvider>
  );
};

export default AppRouter;
