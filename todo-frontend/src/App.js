import React, { useState, useEffect } from 'react';
import TaskService from './services/taskService.js';
import TaskList from './component/taskList.js';
import TaskForm from './component/taskForm.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    } catch(error) {
      console.error('Error creating task:', error);
    }
    setLoading(false);
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await TaskService.createTask(taskData);
      setTasks([...tasks, newTask]);
    } catch(error) {
      console.error('Error creating task:', error);
    }
  };

  const handleToggleTask = async (taskId) => {
    try {
      const updatedTask = await TaskService.toggleTaskCompletion(taskId);
      setTasks(tasks.map(task =>
        task.id === taskId ? updatedTask : task
      ));
    } catch(error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await TaskService.deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch(error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <TaskForm onSubmit={handleCreateTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
