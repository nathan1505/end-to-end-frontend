import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DutyForm from '../src/components/DutyForm';
import * as dutiesApi from '../src/api/dutiesApi';

// Correct the mocking of the API
jest.mock('../src/api/dutiesApi', () => ({
  createDuty: jest.fn()
}));

describe('DutyForm', () => {
  test('submits the duty and calls onDutyAdded', async () => {
    const onDutyAdded = jest.fn();
    const { createDuty } = dutiesApi;
    jest.mocked(createDuty).mockResolvedValue({ id: '1', name: 'New Duty' });
    render(<DutyForm onDutyAdded={onDutyAdded} />);

    fireEvent.change(screen.getByPlaceholderText('Enter duty name'), { target: { value: 'New Duty' } });
    fireEvent.submit(screen.getByRole('button'));

    await screen.findByText('Add Duty');

    expect(createDuty).toHaveBeenCalledWith('New Duty');
    expect(onDutyAdded).toHaveBeenCalledWith({ id: '1', name: 'New Duty' });
  });
});
