import renderer from 'react-test-renderer';
import { Loader } from '../components';

test('it renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
