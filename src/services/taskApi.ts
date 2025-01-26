import { Task } from '../types/task';
import { authApi } from './authApi';

const API_URL = process.env.REACT_APP_API_URL || '';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${authApi.getToken()}`,
});

export const taskApi = {
  addTask: async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await fetch(`${API_URL}/api/tasks`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    return response.json();
  },

  updateTaskStatus: async (id: string, status: Task['status']): Promise<Task> => {
    const response = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authApi.getToken()}`,
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
    return response.json();
  },

  deleteTask: async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  },

  getAllTasks: async (): Promise<Task[]> => {
    const response = await fetch(`${API_URL}/api/tasks`,{
        method: 'GET',
        headers: getHeaders(),
      });
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const responseData = await response.json();
    return responseData.data.tasks;
  },
}; 