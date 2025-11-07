import { render } from '@testing-library/react-native';
import Greeting from '../components/Greeting';


describe('<Greeting />', () => {
  test('Greeting user name appears in the text', () => {
    // getByText returns -> React Test Instance. Eg: <Text>Hello, Steven!</Text>
    const { getByText } = render(<Greeting name={"Steven Kaing"} />);


    //If Hello, Steven Kaing!” exists -> nothing happens -> test passes.
    expect(getByText('Hello, Steven Kaing!')).toBeTruthy(); //Searches the rendered output for a Text node that contains it
  });
});