import { Clock } from "../../models/Clocks"
import { ClockForm } from "../ClockForm/ClockForm"
import { useState } from "react";
// Settings: Takes clocks and updateClock props.
// Given an array of clocks, displays a list of ClockForm components.

interface SettingsProps {
    clocks: Clock[];
    deleteClocks: (index: number) => void;
    updateClocks: (clocks: Clock[]) => void;
  }
  
  export function Settings({
    clocks,
    deleteClocks,
    updateClocks,
  }: SettingsProps) {
    const [newClock, updateNewClock] = useState<Clock[]>(clocks);
  
    const provideIndex = (index: number) => {
      deleteClocks(index);
    };
  
    return (
      <div>
        {clocks.map((clock, index) => (
          <div className="singleRow">
            <tr key={index}>
              <td>
                <ClockForm
                  clock={clock}
                
                />
                <button onClick={() => provideIndex(index)}>Delete</button>
              </td>
            </tr>
          </div>
        ))}
      </div>
    );
  }
  
  export default Settings;





//export function Settings (props: {clocks: Clock[ ], updateClock: (clocks: Clock) => void }){



/*return ( 
    <div>
        <ClockForm />
    </div>
    )
}*/