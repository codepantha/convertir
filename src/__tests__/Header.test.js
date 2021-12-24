import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import { Header } from '../components';

test('it renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Header /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
