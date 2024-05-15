import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FinanceProvider } from './contexts/FinanceContext';
import HomePage from './src/pages/HomePage/HomePage';
import Header from "./src/components/Header/Header";
import ReportsChart from './src/pages/ReportsChart/ReportsChart';


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
