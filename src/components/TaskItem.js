import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>
      <div className="task-actions">
        <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
        <button onClick={() => toggleCompletion(task.id)} className="complete-button">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
