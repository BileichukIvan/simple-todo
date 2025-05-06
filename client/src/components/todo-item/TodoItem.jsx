import clsx from 'clsx';
import { FiCheckCircle, FiCircle, FiTrash2 } from 'react-icons/fi';

import { useTheme } from '../../contexts/ThemeContext';

import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const { isDarkTheme } = useTheme();
  const { id, title, completed, createdAt } = todo;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className={clsx(styles["todo-item"], completed && styles["completed"], isDarkTheme && styles["dark"])}>
      <div className={styles["todo-content"]}>
          <button
            className={styles["button-check"]}
            onClick={() => toggleComplete(id, completed)}
          >
            {completed ? <FiCheckCircle className={clsx(styles["check-icon"], styles["completed"])} /> : <FiCircle className={styles["check-icon"]} />}
          </button>

          <h3 className={styles["todo-title"]}>{title}</h3>

        <span className={styles["todo-date"]}>{formattedDate}</span>
      </div>

      <div className={styles["todo-actions"]}>
        <button
          className={styles["button-delete"]}
          onClick={() => deleteTodo(id)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;