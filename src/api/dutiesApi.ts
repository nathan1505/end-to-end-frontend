"use strict"
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getDuties = async () => {
    try {
        const response = await axios.get(`${API_URL}/duties`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch duties:', error);
        throw error;
    }
};

export const createDuty = async (name: string) => {
    try {
        const response = await axios.post(`${API_URL}/duties`, { name });
        return response.data;
    } catch (error) {
        console.error('Failed to create duty:', error);
        throw error;
    }
};

export const updateDuty = async (id: string, name: string) => {
    try {
        const response = await axios.put(`${API_URL}/duties/${id}`, { name });
        return response.data;
    } catch (error) {
        console.error('Failed to update duty:', error);
        throw error;
    }
};
