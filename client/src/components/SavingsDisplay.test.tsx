import React from 'react';
import { render, screen } from '@testing-library/react';
import SavingsDisplay from './SavingsDisplay';

const defaultProps = {
    totalInvestment: 1200330,
    emoji: '0x1F525',
    title: 'Total Investment'

}

test('renders title', () => {
  render(<SavingsDisplay {...defaultProps} />);
  const title = screen.getByText(/Total Investment/i);
  expect(title).toBeInTheDocument();
});

test('renders formatted price', () => {
    render(<SavingsDisplay {...defaultProps} totalInvestment={10000} />);
    const total = screen.getByText(/£10,000/i);
    expect(total).toBeInTheDocument();
  });

  test('renders emojis', () => {
    render(<SavingsDisplay {...defaultProps} emoji={'0x1F525'} />);
    const value = screen.getByTestId('value-display');
    expect(value).toHaveTextContent(/🔥/i)
  });

  