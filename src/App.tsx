import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClockForm } from './components/ClockForm/ClockForm';
import { Header } from './components/Header/Header';
import AnalogClock from 'analog-clock-react';
import { useState } from 'react';


function App( ) {

  // Options for AnalogClock
  let options = {
    width: "200px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
};



  return (
    <div className="App">
     {/* HEADER */}
      <Header />

    {/* FULL CLOCK AND SETTINGS CONTAINER */}
      <div className="container">

    {/* SETTINGS CONTAINER INCLUDING  TIMEZONE DROP DOWN AND DIGITAL CHECKBOX*/}
        <div className="container-settings">
        <ClockForm />
        </div>
      
      {/* CLOCKS CONTAINER INCLUDING ANALOG AND DIGITAL */}
        <div className="container-clocks">
        <AnalogClock {...options}/>
        </ div>

      </div>

    </div>
  );
}

export default App;
