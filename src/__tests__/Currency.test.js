import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import { Currency } from '../containers';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Currency /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
