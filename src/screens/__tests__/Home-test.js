import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../Home';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});

// Test rendering Home components
it('Should renders Home title', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Welcome to our page!/);
  expect(headerText).toBeInTheDocument();
});
