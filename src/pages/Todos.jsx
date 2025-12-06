import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los todos");
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setMessage("Estado actualizado correctamente");
    setTimeout(() => setMessage(""), 2000);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setMessage("Todo eliminado correctamente");
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) return <p>Cargando todos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Lista de Todos</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {todos.length === 0 ? (
        <p>No hay todos para mostrar</p>
      ) : (
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
      )}
    </div>
  );
}

export default Todos;





