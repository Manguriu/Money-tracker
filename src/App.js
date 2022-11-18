
import React from 'react';
import './App.css';
import Header from './componets/Header';
import Balance from './componets/Balance';
import IncomeExpenses from './componets/IncomeExpenses';
import TransactionList from './componets/TransactionList';
import AddTransaction from './componets/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
  <div className='form'>
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
  </GlobalProvider>
  </div>
  );
}

export default App;
