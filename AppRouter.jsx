import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reports from './src/pages/Reports/Reports';
import { FinanceProvider } from './contexts/FinanceContext';
import HomePage from './src/components/HomePage/HomePage';
import Header from "./src/components/Header/Header";


const AppRouter = () => {
  return (
    <FinanceProvider>
      
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsChart />} />
      </Routes>
    </Router>
   </FinanceProvider>
  );
}

export default AppRouter;
