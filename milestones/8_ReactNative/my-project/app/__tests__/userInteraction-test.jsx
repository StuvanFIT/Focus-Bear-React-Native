import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import UserInteraction from "../pages/userInteraction";

/*
fireEvent:

Simulating DOM Events: It allows you to programmatically trigger various DOM
events like click, change, keydown, focus, blur, etc., on specific elements in tests.
*/

describe("<UserInteraction />", () => {

    test("increment count when button is pressed", () => {
        const {getByText} = render(<UserInteraction/>);


        //Check the initial state
        expect(getByText("Button pressed 0 times!")).toBeTruthy();

        //Press the button: simulated
        const button = getByText("PRESS THIS BUTTON!!!")
        fireEvent.press(button)

        //Check the state after one press
         expect(getByText("Button pressed 1 times!")).toBeTruthy();

    })

})