import React from 'react';

const Task = ({ id, title, isCompleted, onEdit, onDelete }) => {
  return (
    <div className="task">
      <div className="task__head">
        <input
          type="checkbox"
          className="task__check"
          checked={isCompleted}
          onChange={event => onEdit(id, 'isCompleted', event.target.checked)}
          />
        <input
          type="text"
          className="task__title"
          value={title}
          onChange={event => onEdit(id, 'title', event.target.value)}
        />
        <button type="button" className="task__button" onClick={() => {
          if(window.confirm('Do you really want to delete this?')) {
            onDelete(id)
          }
    
        }}>Delete</button>
      </div>
    </div>
  )
};

export default Task;