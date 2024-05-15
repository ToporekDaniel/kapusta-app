import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Reports from "./src/pages/Reports/Reports";
import { FinanceProvider } from "./contexts/FinanceContext";
import HomePage from "./src/components/HomePage/HomePage";
import Header from "./src/components/Header/Header";
import HeroExpenses from "./src/components/Hero/HeroExpenses";
import HeroIncome from "./src/components/Hero/HeroIncome";

const AppRouter = () => {
  return (
    <FinanceProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Navigate to="/expenses" />} />
            <Route path="/expenses" element={<HeroExpenses />} />
            <Route path="/income" element={<HeroIncome />} />
          </Route>
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </FinanceProvider>
  );
};

export default AppRouter;
