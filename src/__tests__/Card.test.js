import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Card } from '../components';

const currency = {
  currency: 'usd',
  rate: 20,
};

describe('render Card to screen', () => {
  test('render Card Component', async () => {
    render(<Card currency={currency} />);

    const cardElement = await screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Card currency={currency} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
