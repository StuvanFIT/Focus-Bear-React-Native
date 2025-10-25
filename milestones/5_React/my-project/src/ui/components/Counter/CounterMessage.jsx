import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../../../redux/counterSlice";

function CounterMessage() {


    const count = useSelector(selectCounterValue);
    let message;

    if (count >10){
        message = "WE ARE OVER THE NUMBER 10!!!"
    } else if (count > 0){
        message= "KEEP GOING!!!"
    } else if (count === 0){
        message = "We are at zero bro..."
    } else {
        message = "This is the default message"
    }

    return (
        <p className="text-xl font-semibold text-amber-700">
            {message}
        </p>
    )


}

export default CounterMessage;