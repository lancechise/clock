import logo from './logo.svg';
import './App.css';
import { ClockForm } from './components/ClockForm/ClockForm';
import { Header } from './components/Header/Header';
import AnalogClock from 'analog-clock-react';
import { Clock } from './models/Clocks';
import { useState } from 'react';
import { ClockDisplay } from './components/ClockDisplay/ClockDisplay';
import { Clocks } from './components/Clocks/Clocks';
import { Settings } from './components/Settings/Settings';


function App() {

  const [clocks, setClocks] = useState<Clock[]>([
    //dummy clocks
    {
      timeZone: "Pacific/Efate",
      isDigital: true
    },
    {
      timeZone: "America/Phoenix",
      isDigital: false
    }
  ]);

  //console.log(clocks)
  
  return (
    <div>
      <Header />
      {/* <Settings updateClock={newClock => setClocks([...clocks, newClock])} clocks={[]}></Settings> */}
      <Clocks updateClock={() => {}} clocks={clocks}></Clocks>
    </div>
  )
}
  








//   let options = {
//     width: "200px",
//     border: true,
//     borderColor: "#2e2e2e",
//     baseColor: "#17a2b8",
//     centerColor: "#459cff",
//     centerBorderColor: "#ffffff",
//     handColors: {
//       second: "#d81c7a",
//       minute: "#ffffff",
//       hour: "#ffffff"
//     }
// };


//   return (
//     <div className="App">
//      {/* HEADER */}
//       <Header />

//     {/* FULL CLOCK AND SETTINGS CONTAINER */}
//       <div className="container">

//     {/* SETTINGS CONTAINER INCLUDING  TIMEZONE DROP DOWN AND DIGITAL CHECKBOX*/}
//         <div className="container-settings">
//         <ClockForm />
//         </div>
      
//       {/* CLOCKS CONTAINER INCLUDING ANALOG AND DIGITAL */}
//         <div className="container-clocks">
//         <AnalogClock {...options}/>
//         </ div>
//       <div className='clock-display'>
//         <ClockDisplay />
//       </div>
//       </div>

//     </div>
//   );
// }

export default App;
