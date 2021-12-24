import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import { Converter } from '../containers';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Converter /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
