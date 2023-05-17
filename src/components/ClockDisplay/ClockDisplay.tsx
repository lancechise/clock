import { useState, useEffect } from "react";
import { Clock } from "../../models/Clocks";
import AnalogClock from 'analog-clock-react'

export function ClockDisplay(props: {clock: Clock}) {

  const [date, setDate] = useState(new Date());
  const gmt = props.clock.timeZone;
  
  let options = {
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
    }
  };

  function refreshClock() {
    setDate(new Date());
  }
  
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
