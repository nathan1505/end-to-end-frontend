import React, { useState } from 'react';
import { Form, Input, Button, Modal, notification } from 'antd';

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
            notification.error({
                message: 'Error',
                description: 'The duty name cannot be empty.'
            });
            return; // Prevent update if the input is empty
        }
        Modal.confirm({
            title: 'Confirm Update',
            content: 'Are you sure you want to update this duty?',
            onOk() {
                onUpdateDuty({ ...duty, name: newName });
                setEditMode(false); // Optionally reset edit mode
                setNewName('');     // Clear input after update
                notification.success({
                    message: 'Updated',
                    description: 'Duty has been updated successfully.'
                });
            }
        });
    };

    const handleDelete = () => {
        Modal.confirm({
            title: 'Confirm Deletion',
            content: 'Are you sure you want to delete this duty?',
            onOk() {
                onDeleteDuty(duty.id);
                notification.success({
                    message: 'Deleted',
                    description: 'Duty has been deleted successfully.'
                });
            }
        });
    };

    return (
        <div>
            <div>{duty.name}</div>
            {editMode ? (
                <Form
                    onFinish={handleUpdate}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input the new duty name!' }]}
                    >
                        <Input
                            placeholder="Enter new duty name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Update</Button>
                </Form>
            ) : (
                <Button onClick={() => setEditMode(true)}>Edit</Button>
            )}
            <Button onClick={handleDelete} danger>Delete</Button>
        </div>
    );
};

export default UpdateDuty;
