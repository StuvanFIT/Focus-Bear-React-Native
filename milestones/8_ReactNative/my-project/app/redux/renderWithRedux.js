import {render} from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter'
/*
Writing this for every test case: <Provider store={store}>
            <Counter/>
        </Provider>

is not reusable. So below is a helper method to make it reusable
*/

export function renderWithRedux(renderedComponent){

    //creating a new store for each test ensures clean state and we ar etesting in isolation
    const store = configureStore({
        reducer: {
            counter: counterReducer
        }
    })

    return render(<Provider store={store}>{renderedComponent}</Provider>)

}