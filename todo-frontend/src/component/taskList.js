import React from 'react';

const TaskList = ({ tasks, onToggle, onDelete}) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>

                    <div className="task-actions">
                        <button onClick={() => onToggle(task.id)}>
                            {task.completed ? 'Mark Incomplete' : "Mark Complete"}
                        </button>
                        <button onClick={() => onDelete(task.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;