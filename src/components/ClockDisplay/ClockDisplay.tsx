import { useState, useEffect } from "react";
import { Clock } from "../../models/Clocks";
const [date, setDate] = useState(new Date());

<<<<<<< HEAD
export function ClockDisplay(props: {}) {
  function ClockDisplay() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(ClockDisplay, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return;
  <div>
    <span>{date.toLocaleTimeString()}</span>

    <div>
      <button>Delete</button>
    </div>
  </div>;

  return (
    <div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default Clock;

// import { useState, useEffect } from 'react';function Clock(){
//     const [date, setDate] = useState(new Date());

//     function refreshClock() {
//       setDate(new Date());
//     }  useEffect(() => {
//       const timerId = setInterval(refreshClock, 1000);
//       return function cleanup() {
//         clearInterval(timerId);
//       };
//     }, []);  return (
//       <span>
//         {date.toLocaleTimeString()}
//       </span>
//     );
//   }export default Clock;
=======
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
>>>>>>> 4f713240cccd6fd8bd26497c3f3f2793e05cfbd1
