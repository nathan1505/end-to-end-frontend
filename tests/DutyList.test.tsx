import React from 'react';
import { render, screen } from '@testing-library/react';
import DutyList from '../src/components/DutyList';
import UpdateDuty from '../src/components/UpdateDuty';

jest.mock('../src/components/UpdateDuty', () => jest.fn(() => null));

describe('DutyList', () => {
  const duties = [
    { id: '1', name: 'Duty One' },
    { id: '2', name: 'Duty Two' }
  ];
  const onUpdateDuty = jest.fn();
  const onDeleteDuty = jest.fn();

  test('renders all duties', () => {
    render(<DutyList duties={duties} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />);

    expect(UpdateDuty).toHaveBeenCalledTimes(duties.length);
  });
});
