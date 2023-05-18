import { useState, useEffect } from "react";
import { Clock } from "../../models/Clocks";
import AnalogClock from 'analog-clock-react'


export function ClockDisplay(props: {clock: Clock}) {

  const [date, setDate] = useState(new Date());
  const [options, setOptions] = useState({
    useCustomTime: true,
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    },
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
  })
  const [selected, setSelected] = useState("America/Los_Angeles");
  
  function refreshClock() {
    let ausTime = new Date().toLocaleString("en-US", { 
      timeZone: selected,
    });
    
    let newDate = new Date(ausTime);
    
    
     setOptions({
       useCustomTime: true,
       width: "300px",
       border: true,
       borderColor: "#2e2e2e",
       baseColor: "#17a2b8",
       centerColor: "#459cff",
       centerBorderColor: "#ffffff",
       handColors: {
         second: "#d81c7a",
         minute: "#ffffff",
         hour: "#ffffff"
       },
       seconds:  newDate.getSeconds(),
       minutes: newDate.getMinutes(),
       hours: newDate.getHours(),
     });
   }
  
  //console.log(ausTime);
  // console.log(date);
  
  
  
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
   
  return (
      <div>
        <div className="digital">
          {date.toLocaleTimeString()}
        </div>
        <div className="analog">
    <h2>React Clock</h2>
    <AnalogClock {...options} />
    
        </div>
      </div>
    )
  }
