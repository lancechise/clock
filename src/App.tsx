import logo from './logo.svg';
import './App.css';
import { ClockForm } from './components/ClockForm/ClockForm';
import { Header } from './components/Header/Header';
import AnalogClock from 'analog-clock-react';
import { Clock } from './models/Clocks';
import { useState } from 'react';
import { ClockDisplay } from './components/ClockDisplay/ClockDisplay';


function App( ) {

  const [clocks, setClocks] = useState<Clock[]>([
    //dummy clocks
    {
      timeZone: "-06:00",
      isDigital: true
    },
    {
      timeZone: "-07:00",
      isDigital: false
    }
  ]);

  //console.log(clocks)
  

  

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
      <div className='clock-display'>
        <ClockDisplay />
      </div>
      </div>

    </div>
  );
}

export default App;
