import Counter from '../pages/counter';
import { renderWithRedux } from '../helpers/renderWithRedux';

describe('Testing counter page', () => {

    //This case checks if the component is correclty wrapped in a <provider store=store/>
    it("renders the component correctly", () => {
        renderWithRedux(<Counter/>)
    })

    it("Should start with the value of 0", () => {
        const {getByText} = renderWithRedux(<Counter/>)

        //Check that the element exists in the rendered tree.
        const count = getByText("0")
        
        expect(count).toBeTruthy();
    })

})