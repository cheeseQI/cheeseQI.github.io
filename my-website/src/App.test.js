import { render, screen } from '@testing-library/react';
import App from './App';

test('renders personal blog heading', () => {
  render(<App />);
  expect(screen.getByText(/Projects · Interests · Notes/i)).toBeInTheDocument();
});
