import React from 'react';
import '../styles/Task.css';

const Task = ({ id, text, completed, toggleCompletion, editTaskText }) => {
  const handleToggle = () => {
    toggleCompletion(id);
  };

  const handleEdit = () => {
    editTaskText(id);
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span className={`task-text ${completed ? 'completed' : ''}`}>
        {text}
      </span>
      <button className="task-edit-button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default Task;
