import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Settings } from './components/Settings';
import { Clocks } from './components/Clocks';

function App() {
  return (
    <div className="App">
      <Header />
      <Settings />
      <Clocks />
    </div>
  );
}

export default App;
