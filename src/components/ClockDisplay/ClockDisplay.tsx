import { useState, useEffect } from "react"
import { Clock } from "../../models/Clocks"

export function ClockDisplay(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);  return (
        <div>
            <div>
                <button>Delete</button>
            </div>
        <span>
            {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
