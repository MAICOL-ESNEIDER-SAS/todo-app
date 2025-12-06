import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // all, completed, pending

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        if (!response.ok) throw new Error("Error en la respuesta de la API");
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

  // Funciones para acciones de los todos
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

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
    setMessage("Todo editado correctamente");
    setTimeout(() => setMessage(""), 2000);
  };

  // Filtrar todos según selección
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
  });

  if (loading) return <p>Cargando todos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Lista de Todos</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}

      {/* Botones de filtro */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFilter("all")}>Todos</button>{" "}
        <button onClick={() => setFilter("completed")}>Completados</button>{" "}
        <button onClick={() => setFilter("pending")}>Pendientes</button>
      </div>

      <TodoList
        todos={filteredTodos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default Todos;






