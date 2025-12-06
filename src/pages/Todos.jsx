import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los todos:", error);
        setMessage("Error al cargar los todos");
        setLoading(false);
      });
  }, []);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setMessage("Estado actualizado correctamente");
    setTimeout(() => setMessage(""), 2000); // mensaje desaparece después de 2s
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setMessage("Todo eliminado correctamente");
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) return <p>Cargando todos...</p>;

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





