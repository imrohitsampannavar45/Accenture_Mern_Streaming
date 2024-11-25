import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    // This beforeEach hook will run before every test in this describe block
    beforeEach(() => {
        console.log("Setting up for a test case");
        render(<Counter />);
    });

    test('Initial count is 0', () => {
        const countValue = screen.getByTestId('count');
        expect(countValue).toHaveTextContent('Count:0');
    });

    test('increments count when increment button is clicked', () => {
        const countValue = screen.getByTestId('count');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('Count:1');
    });

    test('decrements count when decrement button is clicked', () => {
        const countValue = screen.getByTestId('count');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('Count:-1');
    });
});
