"use strict"
import React from 'react';
import UpdateDuty from './UpdateDuty';

interface Duty {
    id: string;
    name: string;
}

interface DutyListProps {
    duties: Duty[];
    onUpdateDuty: (updatedDuty: Duty) => void;
    onDeleteDuty: (dutyId: string) => void;
}

const DutyList: React.FC<DutyListProps> = ({ duties, onUpdateDuty, onDeleteDuty }) => {
    return (
        <div>
            {duties.map(duty => (
                <UpdateDuty key={duty.id} duty={duty} onUpdateDuty={onUpdateDuty} onDeleteDuty={onDeleteDuty} />
            ))}
        </div>
    );
};

export default DutyList;
