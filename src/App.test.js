import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> */}