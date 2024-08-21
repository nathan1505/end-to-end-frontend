import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UpdateDuty from '../src/components/UpdateDuty';

describe('UpdateDuty Component', () => {
  const mockDuty = { id: '1', name: 'Test Duty' };
  const onUpdateDuty = jest.fn();
  const onDeleteDuty = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with initial props and can enter edit mode', () => {
    render(<UpdateDuty duty={mockDuty} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />);
    
    expect(screen.getByText('Test Duty')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Edit'));
    expect(screen.getByPlaceholderText('Enter new duty name')).toBeInTheDocument();
  });

  it('updates duty on form submission', () => {
    render(<UpdateDuty duty={mockDuty} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />);
    fireEvent.click(screen.getByText('Edit'));
    
    fireEvent.change(screen.getByPlaceholderText('Enter new duty name'), { target: { value: 'Updated Duty' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Update' }));

    expect(onUpdateDuty).toHaveBeenCalledWith({ id: '1', name: 'Updated Duty' });
    expect(onUpdateDuty).toHaveBeenCalledTimes(1);
    expect(screen.queryByPlaceholderText('Enter new duty name')).not.toBeInTheDocument();
  });

  it('does not update duty if input is empty', () => {
    render(<UpdateDuty duty={mockDuty} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />);
    fireEvent.click(screen.getByText('Edit'));

    fireEvent.change(screen.getByPlaceholderText('Enter new duty name'), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Update' }));

    expect(onUpdateDuty).not.toHaveBeenCalled();
  });

  it('can delete a duty', () => {
    render(<UpdateDuty duty={mockDuty} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />);
    fireEvent.click(screen.getByText('Delete'));

    expect(onDeleteDuty).toHaveBeenCalledWith('1');
    expect(onDeleteDuty).toHaveBeenCalledTimes(1);
  });
});
