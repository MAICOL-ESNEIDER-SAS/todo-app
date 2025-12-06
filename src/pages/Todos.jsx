import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los todos:", error);
        setLoading(false);
      });
  }, []);

  // Función para marcar completado/pendiente
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Función para eliminar un todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) return <p>Cargando todos...</p>;

  return (
    <div>
      <h1>Lista de Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "✅" : "❌"}{" "}
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? "Marcar pendiente" : "Marcar completo"}
            </button>{" "}
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;



