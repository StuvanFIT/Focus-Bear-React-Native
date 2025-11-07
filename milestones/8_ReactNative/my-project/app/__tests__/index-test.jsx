import { render } from '@testing-library/react-native';
import Home from '../pages/index';


describe('<Home />', () => {
  test('Text renders correctly on Home', () => {
    const { getByText } = render(<Home />);


    //If “Welcome!” exists -> nothing happens -> test passes.
    expect(getByText('Welcome!')).toBeTruthy() //Searches the rendered output for a Text node that contains "Welcome!".
  });
});