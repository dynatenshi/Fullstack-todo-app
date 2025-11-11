import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onSubmit({ title, description });
            setTitle('');
            setDescription('');
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={handleTitleChange}
                required
            />
            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={handleDescriptionChange}
            />
            <button type="submit">
                Add Task
            </button>
        </form>
    );

};

export default TaskForm;