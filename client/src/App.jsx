import { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api/todoApi';

import Header from './components/header/Header';
import TodoForm from './components/todo-form/TodoForm';
import TodoList from './components/todo-list/TodoList';

import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    try {
      setIsLoading(true);

      const data = await fetchTodos();
      setTodos(data);

      setError(null);
    } catch (err) {
      setError('Failed to fetch list');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setError(null);
  }, [todos]);

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await createTodo(todoData);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      setError('Failed to add a task');
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      const updatedTodo = { ...todoToUpdate, completed: !completed };

      await updateTodo(id, updatedTodo);

      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      ));
    } catch (err) {
      setError('Failed to update the task');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete the task');
    }
  };

  return (
    <div className={styles["app-container"]}>
      <Header />

      <main className={styles["main-content"]}>
        <TodoForm addTodo={handleAddTodo} />

        {error && <div className={styles["error-message"]}>{error}</div>}

        <TodoList
          todos={todos}
          toggleComplete={handleToggleComplete}
          deleteTodo={handleDeleteTodo}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;