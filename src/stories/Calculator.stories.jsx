// Calculator.stories.js

import React from 'react';
import { Calculator } from '../Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  displayValue: "123",
};

export const WithLongValue = Template.bind({});
WithLongValue.args = {
  displayValue: "123456789",
};

export const WithErrorValue = Template.bind({});
WithErrorValue.args = {
  displayValue: "ERROR",
};

export const WithAddition = Template.bind({});
WithAddition.args = {
  displayValue: "5",
  operator: "+",
  firstOperand: "2",
};

export const WithSubtraction = Template.bind({});
WithSubtraction.args = {
  displayValue: "8",
  operator: "-",
  firstOperand: "10",
};

export const WithMultiplication = Template.bind({});
WithMultiplication.args = {
  displayValue: "15",
  operator: "*",
  firstOperand: "3",
};

export const WithDivision = Template.bind({});
WithDivision.args = {
  displayValue: "6",
  operator: "/",
  firstOperand: "12",
};

export const WithResult = Template.bind({});
WithResult.args = {
  displayValue: "18",
  operator: "+",
  firstOperand: "8",
  secondOperand: "10",
};

export const WithZero = Template.bind({});
WithZero.args = {
  displayValue: "0",
};

export const WithClear = Template.bind({});
WithClear.args = {
  displayValue: "0",
  firstOperand: "10",
};

