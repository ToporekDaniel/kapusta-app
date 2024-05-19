import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { FinanceProvider } from "./contexts/FinanceContext";
import HomePage from "./src/pages/HomePage/HomePage";
import Header from "./src/components/Header/Header";
import ReportsChart from "./src/pages/ReportsChart/ReportsChart.jsx";
console.log(ReportsChart);
import HeroExpenses from "./src/components/Hero/HeroExpenses";
import HeroIncome from "./src/components/Hero/HeroIncome";

// import { LoginForm } from './src/pages/LoginGoogle/LoginForm';
import LoginPage from './src/pages/LoginGoogle/LoginPage'

const AppRouter = () => {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Navigate to="/expenses" />} />
            <Route path="/expenses" element={<HeroExpenses />} />
            <Route path="/income" element={<HeroIncome />} />
          </Route>
          <Route path="/reports" element={<ReportsChart />} />
        </Routes>
      </Router>
    </FinanceProvider>
  );
};

export default AppRouter
