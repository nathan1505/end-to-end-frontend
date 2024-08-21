import React, { useState } from 'react';
import { createDuty } from '../api/dutiesApi';
import { Form, Input, Button, notification } from 'antd';

interface Duty {
    id: string;
    name: string;
}

interface DutyFormProps {
    onDutyAdded: (duty: Duty) => void;
}

const DutyForm: React.FC<DutyFormProps> = ({ onDutyAdded }) => {
    const [form] = Form.useForm();

    const handleSubmit = async (values: { name: string }) => {
        try {
            const newDuty = await createDuty(values.name);
            onDutyAdded(newDuty);
            form.resetFields(); // Reset the form fields after successful submission
            notification.success({
                message: 'Success',
                description: 'Duty successfully added.',
            });
        } catch (error) {
            // Handle potential errors from the API or network issues
            notification.error({
                message: 'Error',
                description: 'Failed to create duty. Please try again.',
            });
        }
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
        >
            <Form.Item
                label="Duty Name"
                name="name"
                rules={[{ required: true, message: 'Please input the duty name!' }]}
            >
                <Input placeholder="Enter duty name" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Duty
                </Button>
            </Form.Item>
        </Form>
    );
};

export default DutyForm;
