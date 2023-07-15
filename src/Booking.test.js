import { render, screen, fireEvent } from '@testing-library/react';
import Payment from './Payment';

describe('Payment', () => {
  it('renders the form and handles form submission', () => {
    render(<Payment />);
    
    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-07-17' } });
    fireEvent.change(screen.getByLabelText('Time:'), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText('Number of People:'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Comments:'), { target: { value: 'Test comment' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Engagement' } });
    
    // Submit the form
    fireEvent.click(screen.getByText('Go to Payment'));

    // Check if the form submission is handled correctly
    expect(screen.getByLabelText('Card Number:')).toBeInTheDocument();
    expect(screen.getByLabelText('CVV Number:')).toBeInTheDocument();
    expect(screen.getByLabelText('Expiry Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Cardholder Name:')).toBeInTheDocument();
  });
});
