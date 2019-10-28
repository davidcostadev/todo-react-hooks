import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onEdit, onDelete }) => {
  if (!tasks.length) {
    return <div className="tasks__no-data">No data to show</div>
  }

  return tasks.map(task => (
    <Task key={task.id} {...task} onEdit={onEdit} onDelete={onDelete} />
  ))
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
