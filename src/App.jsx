import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const expenses = [
    { id: 1, amount: 120.00, category: 'Food' },
    { id: 2, amount: 80.00, category: 'Transport' }
  ];

  const income = [
    { id: 1, amount: 500.00, category: 'Salary' },
    { id: 2, amount: 150.00, category: 'Freelance' }
  ];

  return (
    <div>
      <Dashboard expenses={expenses} income={income} />
    </div>
  );
}

export default App;
