import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { FinanceProvider } from "./contexts/FinanceContext";
import HomePage from "./src/pages/HomePage/HomePage";
import Header from "./src/components/Header/Header";
import ReportsChart from "./src/pages/ReportsChart/ReportsChart.jsx";
import HeroExpenses from "./src/components/Hero/HeroExpenses";
import HeroIncome from "./src/components/Hero/HeroIncome";
import ExpensesReport from "./src/components/ExpensesReport/ExpensesReport.jsx";
import IncomeReport from "./src/components/IncomeReport/IncomeReport.jsx";  // Ensure correct import

import LoginPage from './src/pages/LoginGoogle/LoginPage.jsx';
import { APP_ROUTES } from "./src/utils/constants.js";

const AppRouter = () => {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <Routes>
          <Route path={APP_ROUTES.SIGN_IN} exact element={<LoginPage />} />
          <Route path={APP_ROUTES.HOME} element={<HomePage />}>
            <Route path="/" element={<Navigate to="expenses" />} />
            <Route path="/expenses" element={<HeroExpenses />} />
            <Route path="/income" element={<HeroIncome />} />
          </Route>
          <Route path="/reports" element={<ReportsChart />}>
            <Route index element={<Navigate to="expenses" />} />
            <Route path="expenses" element={<ExpensesReport />} />
            <Route path="expenses/:categoryName" element={<ExpensesReport />} />

            <Route path="income" element={<IncomeReport />} /> 
            <Route path="income/:categoryName" element={<IncomeReport />} /> 

          </Route>
        </Routes>
      </Router>
    </FinanceProvider>
  );
};

export default AppRouter;