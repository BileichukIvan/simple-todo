import clsx from 'clsx';

import { useTheme } from '../../contexts/ThemeContext';
import TodoItem from '../todo-item/TodoItem';

import styles from './TodoList.module.css';

function TodoList({ isLoading, todos, toggleComplete, deleteTodo }) {
  const { isDarkTheme } = useTheme();

  if (isLoading) {
    return (
      <div className={clsx(styles["message"], isDarkTheme && styles["dark"])}>
        Loading tasks...
      </div>
    );
  }

  return (
    <>
      <h2 className='element-invisible'>Your Tasks</h2>

      <div className={styles["tasks-container"]}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;