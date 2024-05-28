import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('display empieza con 0', () => {
  const { getByTestId } = render(<Calculator />);
  expect(getByTestId('display')).toHaveTextContent('0');
});
test('Suma 2 numeros', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('3');
});
test('Resta 2 numeros', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('4');
});
test('Multiplica 2 numeros', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('10');
});
test('Divide 2 numeros', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('25');
});