import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import { Header, Navigation } from '../components';

describe('Navigation', () => {
  test('render navigation', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    const navElement = screen.getByTestId('nav');
    expect(navElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render the select component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    const selectElement = screen.getByTestId('selectTestId');
    expect(selectElement).toBeInTheDocument();
  });

  it('should correctly set default option', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );
    setTimeout(
      () => expect(screen.getByRole('select', { name: /usd/i }).selected).toBe(
        true,
      ),
      5000,
    );
  });

  it('should update the baseCurrency in the header', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    setTimeout(() => {
      fireEvent.click(screen.getByText('usd'));
      fireEvent.click(screen.getByText('eur'));

      setTimeout(
        () => expect(screen.getByText('EUR')).toBeInTheDocument(),
        10000,
      );
    }, 10000);
  });
});
