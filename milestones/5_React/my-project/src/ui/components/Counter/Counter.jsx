import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCounterValue } from "../../../redux/counterSlice";
import CounterMessage from "./CounterMessage";

function Counter() {

    const count = useSelector(selectCounterValue);
    const dispatch = useDispatch(); //react hook that sends redux messages and lets redux know what happened



    return (
        <div className="min-h-screen flex flex-col space-y-8 justify-center items-center text-gray-800 p-6">
            <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    Introducing the Focus Bear Counter
                </h1>
                <p className='text-2xl md:text-xl font-extrabold mb-6 text-orange-600'>
                    Increment, Decrement or Reset this counter using Redux global state management...
                </p>

                <h2 className="text-5xl font-bold">
                    {count}
                </h2>

                <div className="flex flex-row items-center justify-center gap-2 mt-8">
                    <button onClick={() => dispatch(increment())} className="cursor-pointer hover:bg-amber-600 transition border border-lg border-amber-800 rounded-lg shadow-lg p-6">
                        Increment
                    </button>
                    <button onClick={() => dispatch(decrement())} className="cursor-pointer hover:bg-amber-600 transition border border-lg border-amber-800 rounded-lg shadow-lg p-6">
                        Decrement
                    </button>
                    <button onClick={() => dispatch(reset())} className="cursor-pointer hover:bg-amber-600 transition border border-lg border-amber-800 rounded-lg shadow-lg p-6">
                        Reset
                    </button>

                </div>
            </div>
            <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                <CounterMessage/>
            </div>
        </div>
    )
}
export default Counter;