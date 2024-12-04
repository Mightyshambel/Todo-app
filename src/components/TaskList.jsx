import React, { useState } from 'react';
import Task from './Task';
import '../styles/Tasklist.css';
import '../styles/UpgradeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Training at the Gym', completed: true },
    { id: 2, text: 'Play Paddle with friends', completed: false },
    { id: 3, text: 'Burger BBQ with family', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const addNewTask = () => {
    if (newTaskText.trim() === '') {
      alert('Please enter a task name.');
      return;
    }
    const newTask = {
      id: tasks.length + 1, 
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText(''); 
  };

  const startEditingTask = (id) => {
    const task = tasks.find(task => task.id === id);
    setIsEditing(true);
    setEditingTaskId(id);
    setEditingTaskText(task.text);
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingTaskId) {
        return { ...task, text: editingTaskText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  const deleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== editingTaskId);
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  return (
    <div className="task-list-wrapper">
      <div className="left-panel">
       
        <button className="upgrade-btn">
          <FontAwesomeIcon icon={faTrophy} /> Go Pro Upgrade Now $1
        </button>
        <div className="new-task-container"> 
    <input
      value={newTaskText}
      onChange={(e) => setNewTaskText(e.target.value)}
      placeholder="Enter a new task"
      className="new-task-input"
    />
    <button onClick={addNewTask} className="add-task-btn">Add Task</button>
  </div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            toggleCompletion={toggleCompletion}
            editTaskText={startEditingTask}
          />
        ))}
      </div>

      <div className={`right-panel ${isEditing ? 'active' : ''}`}>
        {isEditing && (
          <>
            <h2>Edit Task</h2>
            <label htmlFor="edit-task-input">Task Name</label>
            <input
              id="edit-task-input"
              className="edit-task-input"
              value={editingTaskText}
              onChange={(e) => setEditingTaskText(e.target.value)}
            />
            <div className="edit-task-buttons">
              <button className="delete-task-btn" onClick={deleteTask}>
                Delete
              </button>
              <button className="save-task-btn" onClick={saveEditedTask}>
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskList;
