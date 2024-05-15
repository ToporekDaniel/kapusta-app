import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';  
import "./App.css";
import AppRouter from '../AppRouter';
import "./app/i18n"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
