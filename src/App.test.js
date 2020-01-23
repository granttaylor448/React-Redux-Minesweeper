import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider} from 'react-redux';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
