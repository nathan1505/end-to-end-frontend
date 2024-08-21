"use strict"
import React, { useState } from 'react';
import { createDuty } from '../api/dutiesApi';

interface Duty {
    id: string;
    name: string;
}

interface DutyFormProps {
    onDutyAdded: (duty: Duty) => void;
}

const DutyForm: React.FC<DutyFormProps> = ({ onDutyAdded }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);

    const validateInput = () => {
        if (!name.trim()) {
            setError('Duty name cannot be empty.');
            return false;
        }
        // Add more validation checks if necessary
        setError(null);
        return true;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateInput()) {
            return; // Stop the form submission if validation fails
        }
        try {
            const newDuty = await createDuty(name);
            onDutyAdded(newDuty);
            setName(''); // Reset the form field
            setError(null); // Clear any errors
        } catch (error) {
            // Handle potential errors from the API or network issues
            setError('Failed to create duty. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter duty name"
                required
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Add Duty</button>
        </form>
    );
};

export default DutyForm;
