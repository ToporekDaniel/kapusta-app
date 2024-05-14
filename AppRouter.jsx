import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './src/components/Dashboard/Dashboard';
import Reports from './src/components/Reports/Reports';
import { FinanceProvider } from './contexts/FinanceContext';
import HomePage from './src/pages/HomePage/HomePage';
import ReportsChart from './src/pages/ReportsCharts/ReportsChart';


const AppRouter = () => {
  return (
    <FinanceProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reports" element={<ReportsChart />} />
      </Routes>
    </Router>
   </FinanceProvider>
  );
}

export default AppRouter;
