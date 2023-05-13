import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClockForm } from './components/ClockForm/ClockForm';
import { Header } from './components/Header/Header';
import AnalogClock from 'analog-clock-react';


function App( ) {

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
     
      <Header />

      <div className="container">

        <div className="container-settings">
        <ClockForm />
        </div>
      
        <div className="container-clocks">
        <AnalogClock {...options}/>
        </ div>

      </div>

    </div>
  );
}

export default App;
