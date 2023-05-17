import { Clock } from "../../models/Clocks"
import { Clocks } from "../Clocks/Clocks"
import { ClockForm } from "../ClockForm/ClockForm"
// Settings: Takes clocks and updateClock props.
// Given an array of clocks, displays a list of ClockForm components.


export function Settings (props: {clocks: Clock[ ], updateClock: (clocks: Clock) => void }){



return ( 
    <div>
        <ClockForm />
    </div>
    )
}