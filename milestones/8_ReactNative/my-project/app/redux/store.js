import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducers/counter';
/*
https://redux-toolkit.js.org/api/configureStore
*/

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;