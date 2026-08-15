import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage with the site owner\'s name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /ethan parker wong/i });
  expect(heading).toBeInTheDocument();
});
