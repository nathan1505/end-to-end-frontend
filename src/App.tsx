import React, { useEffect, useState } from 'react';
import { Button, List, Typography } from 'antd';
import DutyForm from './components/DutyForm';
import DutyList from './components/DutyList';
import { getDuties, updateDuty } from './api/dutiesApi';

interface Duty {
    id: string;
    name: string;
}

const App = () => {
    const [duties, setDuties] = useState<Duty[]>([]);

    useEffect(() => {
        const fetchDuties = async () => {
            const fetchedDuties = await getDuties();
            setDuties(fetchedDuties);
        };

        fetchDuties();
    }, []);

    const handleUpdateDuty = async (updatedDuty: Duty) => {
        await updateDuty(updatedDuty.id, updatedDuty.name);
        const newDuties = duties.map(duty => duty.id === updatedDuty.id ? updatedDuty : duty);
        setDuties(newDuties);
    };

    const handleDeleteDuty = (dutyId: string) => {
      setDuties(prevDuties => prevDuties.filter(duty => duty.id !== dutyId));
    };

    return (
        <div>
            <Typography.Title level={1}>Duties Manager</Typography.Title>
            <DutyForm onDutyAdded={duty => setDuties([...duties, duty])} />
            <DutyList duties={duties} onUpdateDuty={handleUpdateDuty} onDeleteDuty={handleDeleteDuty} />
        </div>
    );
};

export default App;
