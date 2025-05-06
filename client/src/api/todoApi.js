const API_URL = import.meta.env.VITE_API_URL;

export const fetchTodos = async () => {
  return await fetch(`${API_URL}/task`).then(res => res.json());
};

export const createTodo = async (todoData) => {
  return await fetch(`${API_URL}/task`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoData)
  }).then(res => res.json());
};

export const updateTodo = async (id, todoData) => {
  return await fetch(`${API_URL}/task/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoData)
  }).then(res => res.json());
};

export const deleteTodo = async (id) => {
  return await fetch(`${API_URL}/task/${id}`, {
    method: "DELETE",
  }).then(res => res.json());
};