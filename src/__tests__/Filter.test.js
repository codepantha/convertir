import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import { Filter } from '../components';

test('it renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Filter /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
