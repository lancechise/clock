import { useState, useEffect } from "react"
import { Clock } from "../../models/Clocks"

export function ClockDisplay(props: {}) {


    return(
        <div>
            <div>
                <button>Delete</button>

               

            </div>



        </div>
    )
}




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
