import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Reports from './src/pages/Reports/Reports';
import { FinanceProvider } from './contexts/FinanceContext';
import Header from "./src/components/Header/Header"
import ReportsChart from './src/pages/ReportsCharts/ReportsChart'
import HomePage from './src/pages/HomePage/HomePage'


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
