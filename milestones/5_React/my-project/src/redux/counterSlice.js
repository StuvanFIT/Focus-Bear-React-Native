import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

/*

*/

export const selectCounterValue = (state) => state.counter.value;

export const {increment, decrement, reset} = counterSlice.actions;
/*
NEEDED FOR CONNECTING THE SLICE TO THE STORE

exporting the reducer function that createSlice automatically generated.
Every slice needs a reducer, that’s the function that tells Redux how to
update the state when an action happens (increment, decrement, reset).
*/
export default counterSlice.reducer; 