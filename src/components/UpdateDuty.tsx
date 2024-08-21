"use strict"
import React, { useState } from 'react';

interface Duty {
    id: string;
    name: string;
}

interface UpdateDutyProps {
    duty: Duty;
    onUpdateDuty: (duty: Duty) => void;
    onDeleteDuty: (dutyId: string) => void;
}

const UpdateDuty: React.FC<UpdateDutyProps> = ({ duty, onUpdateDuty, onDeleteDuty }) => {
    const [editMode, setEditMode] = useState(false);
    const [newName, setNewName] = useState('');

    const handleUpdate = () => {
        if (newName.trim() === '') {
            alert('The duty name cannot be empty.');
            return; // Prevent update if the input is empty
        }
        if (window.confirm('Are you sure you want to update this duty?')) {
            onUpdateDuty({ ...duty, name: newName });
            setEditMode(false); // Optionally reset edit mode
            setNewName('');     // Clear input after update
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this duty?')) {
            onDeleteDuty(duty.id);
        }
    };

    return (
        <div>
            <div>{duty.name}</div>
            {editMode ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate();
                }}>
                    <input
                        type="text"
                        placeholder="Enter new duty name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button type="submit">Update</button>
                </form>
            ) : (
                <button onClick={() => setEditMode(true)}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default UpdateDuty;
