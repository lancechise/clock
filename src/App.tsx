import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Settings } from './components/Settings/Settings';
import { Clocks } from './components/Clocks/Clocks';
import { useState } from 'react';
import { Clock } from './models/Clocks';
import { ClockDisplay } from './components/ClockDisplay/ClockDisplay';

function App() {

  const [clocks, setClocks] = useState<Clock[]>([])


  return (
    <div className="App">
      <Header />
      <ClockDisplay />
    </div>
  );
}

export default App;
