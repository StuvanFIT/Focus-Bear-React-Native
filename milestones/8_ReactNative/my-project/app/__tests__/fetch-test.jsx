import React from "react";
import {render, waitFor} from "@testing-library/react-native";
import Fetch from "../pages/fetch";

//We mock the fetch api
global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => 
            Promise.resolve([
                { id: 1, name: 'Steven' },
            ]),
    })
)

describe('<Fetch/>', () => {
    test('Fethcing api and users names appear in the text', async () => {

        const {getByText} = render(<Fetch/>);

        //waitFor repeatedly runs the callback until the expectation passes or timeout error.
        //So it keeps runnning until the text has been rendered.
        await waitFor(() => {
            expect(getByText("Steven")).toBeTruthy();
        
        })

    })
})


