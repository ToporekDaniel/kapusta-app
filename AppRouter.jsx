import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './src/pages/Dashboard/Dashboard';
import Reports from './src/pages/Reports/Reports';
import { FinanceProvider } from './contexts/FinanceContext';
import HomePage from './src/components/HomePage/HomePage';
// import { LoginForm } from './src/pages/LoginGoogle/LoginForm';
import LoginPage from './src/pages/LoginGoogle/LoginPage'


const AppRouter = () => {
  return (
    <FinanceProvider>
    <Router>
      <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
   </FinanceProvider>
  );
}

export default AppRouter
