import React from "react";

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li>
      {todo.title} - {todo.completed ? "✅" : "❌"}{" "}
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? "Marcar pendiente" : "Marcar completo"}
      </button>{" "}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
