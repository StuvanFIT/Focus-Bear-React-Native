import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counter", // used to prefix action types, e.g. "counter/increment"
    initialState: {value: 0, increment:1}, // default state for this part of the store
    reducers: {
        increment: (state) => { state.value += state.increment },
        decrement: (state) => { state.value -= state.increment },
        updateIncrement: (state, action) => {
            state.increment = action.payload

        }
    },
})

export const selectCounterValue = (state) => state.counter.value;
export const { increment, decrement, updateIncrement } = counterSlice.actions;
export default counterSlice.reducer