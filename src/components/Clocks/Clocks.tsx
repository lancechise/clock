import { Clock } from "../../models/Clocks"
import { ClockDisplay } from "../ClockDisplay/ClockDisplay"


// Clocks: Takes clocks prop. 
// Given an array of clocks, displays a list of ClockDisplay components.

export function Clocks(props: {clocks: Clock[ ], } ){




    return(

        <div>
        <ClockDisplay />
        </div>
    )


}

