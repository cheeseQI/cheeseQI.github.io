import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and its current projects', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /Projects Interests Notes/i })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /Open Source/i })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Experience/i }));
  expect(screen.getByRole('link', { name: /ZW ML Platform/i })).toHaveAttribute('href', 'https://www.zw-ml.com/');
  expect(screen.queryByText(/Be The Detective/i)).not.toBeInTheDocument();
});
