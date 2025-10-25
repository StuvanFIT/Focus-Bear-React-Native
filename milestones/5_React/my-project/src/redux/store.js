import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
/*
https://redux-toolkit.js.org/api/configureStore
*/

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
