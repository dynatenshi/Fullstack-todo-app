const API_BASE = 'http://localhost:8080/api';

class TaskService {
    
    async getAllTasks() {
        const response = await fetch(`${API_BASE}/tasks`);
        return await response.json();
    }

    async createTask(taskData) {
        const response = await fetch(`${API_BASE}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        });
        return await response.json();
    }

    async updateTask(id, taskData) {
        const response = await fetch(`${API_BASE}/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        });
        return await response.json();
    }

    async deleteTask(id) {
        const response = await fetch(`${API_BASE}/tasks/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Delete failed with status:${response.status}`);
        }
    }

    async toggleTaskCompletion(id) {
        const response = await fetch(`${API_BASE}/tasks/${id}/toggle`, {
            method: 'PATCH'
        });
        return await response.json();
    }

}

export default new TaskService();