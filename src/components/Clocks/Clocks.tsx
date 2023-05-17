import { Clock } from "../../models/Clocks"
import { ClockDisplay } from "../ClockDisplay/ClockDisplay"


// Clocks: Takes clocks prop. 
// Given an array of clocks, displays a list of ClockDisplay components.

export function Clocks(props: {clocks: Clock[], updateClock: (clock: Clock) => void}){

    return(
        <div>
            <h3>Clocks!</h3>
            {
                props.clocks.map(clock => <ClockDisplay clock={clock}></ClockDisplay>)
            }
        </div>
    )
}