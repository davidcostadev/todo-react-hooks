import React, { useState } from 'react';
import uuid from 'uuid';
import Tasks from './Tasks';
import AddForm from './AddForm';


const Content = () => {
  const [ tasks, setTasks ] = useState([
    { id: uuid(), title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', isCompleted: false },
    { id: uuid(), title: 'Soluta natus. Dicta quo dolorum ab repellat.', isCompleted: true },
  ]);

  const onAddTask = ({ title }) => {
    console.log('onAddTask', title)
    setTasks([
      ...tasks,
      {
        id: uuid(),
        isCompleted: false,
        title,
      },
    ]);
  }

  const onEdit = (id, field, value) => {
    setTasks(tasks.map(task => task.id === id ? ({
        ...task,
        [field]: value
      }) : task))
  }

  const onDelete = (id) => {
    setTasks(tasks.filter(tasks => tasks.id !== id))
  }

  console.log(tasks)

  return (
    <div id="content">
      <h1 className="page-title">TODO list</h1>
      <AddForm onAddTask={onAddTask} />
      <Tasks tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default Content;