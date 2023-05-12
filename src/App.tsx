import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClockForm } from './components/ClockForm/ClockForm';
import { Header } from './components/Header/Header';

function App( ) {
  return (
    <div className="App">
      <Header />
      <ClockForm />

    </div>
  );
}

export default App;
