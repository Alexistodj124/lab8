import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Calculator />);
        const displayElement = getByText('0');
        expect(displayElement).toBeInTheDocument();
    });

    test('handles number click correctly', () => {
        const { getByText } = render(<Calculator />);
        const numberButton = getByText('1');
        fireEvent.click(numberButton);
        const displayElement = getByText('1');
        expect(displayElement).toBeInTheDocument();
    });

    test('handles operator click correctly', () => {
        const { getByText } = render(<Calculator />);
        const numberButton = getByText('1');
        const operatorButton = getByText('+');
        fireEvent.click(numberButton);
        fireEvent.click(operatorButton);
        const displayElement = getByText('+');
        expect(displayElement).toBeInTheDocument();
    });

    test('handles equal click correctly', () => {
        const { getByText } = render(<Calculator />);
        const numberButton = getByText('1');
        const operatorButton = getByText('+');
        const equalButton = getByText('=');
        fireEvent.click(numberButton);
        fireEvent.click(operatorButton);
        fireEvent.click(numberButton);
        fireEvent.click(equalButton);
        const displayElement = getByText('2');
        expect(displayElement).toBeInTheDocument();
    });

    test('clears display correctly', () => {
        const { getByText } = render(<Calculator />);
        const numberButton = getByText('1');
        const clearButton = getByText('C');
        fireEvent.click(numberButton);
        fireEvent.click(clearButton);
        const displayElement = getByText('0');
        expect(displayElement).toBeInTheDocument();
    });
});
