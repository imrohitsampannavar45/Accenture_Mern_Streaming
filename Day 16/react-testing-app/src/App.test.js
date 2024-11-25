import { render, screen } from '@testing-library/react';
import App from './App';
import Hello from './Hello';
 
test('renders learn react link', () => {
  render(<App />)
  render (<Hello />)
});
 