import { useState } from 'react';
import clsx from 'clsx';
import { FiPlus } from 'react-icons/fi';

import { useTheme } from '../../contexts/ThemeContext';
import Button from '../button/Button';

import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const { isDarkTheme } = useTheme();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTodo({ title });

    setTitle('');
  };

  return (
    <>
      <h2 className='element-invisible'>Create New Task</h2>

      <form onSubmit={handleSubmit} className={clsx(styles["todo-form"], isDarkTheme && styles["dark"])}>
        <label className='element-invisible' htmlFor="title">Title</label>

        <input
          type="text"
          id="title"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles["form-input"]}
        />

        <Button type='submit'>
          <FiPlus />
        </Button>
      </form>
    </>
  );
}

export default TodoForm;