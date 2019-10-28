import React, { useState } from 'react';

import './form.css';

const AddForm = ({ onAddTask }) => {
  const initialForm = { title: ''}
  const [error, setError] = useState('');
  const [form, setForm] = useState(initialForm);

  const validate = () => {
    if (form.title.length === 0) {
      setError('Please the title is required!');
      return false
    }
    setError('')
    return true
  }


  const onSubmit = (event) => {
    event.preventDefault();
    
    if (!validate()) return;

    onAddTask(form);
    setForm(initialForm);
  }
  const handleInput = ({ target: {name, value }}) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div id="add-form">
      <h2>Add Task</h2>
      <form onSubmit={onSubmit}>
        {error && (
          <div className="error">
            {error}
          </div>
        )}
        <div className="control">
          <label htmlFor="title" className="label">Title:</label>
          <input
            type="text"
            className="input"
            name="title"
            value={form.title}
            placeholder="title"
            onChange={handleInput}
            autoComplete="off"
            />
        </div>

        <div className="actions">
          <button className="button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
