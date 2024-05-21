import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { FinanceProvider } from "./contexts/FinanceContext";
import HomePage from "./src/pages/HomePage/HomePage";
import Header from "./src/components/Header/Header";
import ReportsChart from "./src/pages/ReportsChart/ReportsChart.jsx";
import HeroExpenses from "./src/components/Hero/HeroExpenses";
import HeroIncome from "./src/components/Hero/HeroIncome";
import ExpensesReport from "./src/components/ExpensesReport/ExpensesReport.jsx";
import IncomeReport from "./src/components/IncomeReport/IncomeReport.jsx";

const AppRouter = () => {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Navigate to="/expenses" />} />
            <Route path="expenses" element={<HeroExpenses />} />
            <Route path="income" element={<HeroIncome />} />
          </Route>
          <Route path="/reports" element={<ReportsChart />}>
            <Route index element={<Navigate to="/reports/expenses" />} />
            <Route path="expenses" element={<ExpensesReport />} />
            <Route path="income" element={<IncomeReport />} />
          </Route>
        </Routes>
      </Router>
    </FinanceProvider>
  );
};

export default AppRouter;
