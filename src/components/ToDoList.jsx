import React, { useEffect, useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = () => {
      fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
    //   try {
    //     const response = await fetch('http://jsonplaceholder.typicode.com/todos');
        
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }

    //     const data = response.json();
    //     setTodos(data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
