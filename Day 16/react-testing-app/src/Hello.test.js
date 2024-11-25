import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hello from './Hello';

describe('Hello Component', () => {
  test('renders the Hello component', () => {
    render(<Hello />);
    const divElement = screen.getByText(/Hello/);
    expect(divElement).toBeInTheDocument();
  });

  test('contains the correct text content', () => {
    render(<Hello />);
    const divElement = screen.getByText(/Hello/);
    expect(divElement).toHaveTextContent('Hello');
    expect(divElement).toHaveTextContent('Hey There');
    expect(divElement).toHaveTextContent('Hi Good Evening');
  });

  test('applies the correct CSS class', () => {
    render(<Hello />);
    const divElement = screen.getByText(/Hello/);
    expect(divElement).toHaveClass('main');
  });

  test('changes color on hover', () => {
    render(<Hello />);
    const divElement = screen.getByText(/Hello/);
    expect(divElement).toHaveStyle('color: black');
    
    // Simulate hover
    fireEvent.mouseOver(divElement);
    expect(divElement).toHaveStyle('color: red');
  });
});
