import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Test rendering Home components
it('Should render App title', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/Denis React Calculator/);
  expect(headerText).toBeInTheDocument();
});

it('Should render AC', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/AC/);
  expect(btnName).toBeInTheDocument();
});

it('Should render =', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/=/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 1', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/1/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 2', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/2/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 3', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/3/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 4', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/4/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 5', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/5/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 6', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/6/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 7', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/7/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 8', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/8/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 8', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/9/);
  expect(btnName).toBeInTheDocument();
});

it('Should render calculator button 0', () => {
  const { getByText } = render(<App />);
  const btnName = getByText(/0/);
  expect(btnName).toBeInTheDocument();
});
