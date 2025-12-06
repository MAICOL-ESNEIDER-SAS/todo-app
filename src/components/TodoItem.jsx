import React, { useState } from "react";

function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editTitle); // Guardar cambios
    }
    setIsEditing(!isEditing);
  };

  return (
    <li style={{ marginBottom: "5px" }}>
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        <span>
          {todo.title} - {todo.completed ? "✅" : "❌"}
        </span>
      )}
      {" "}
      <button onClick={handleEdit}>{isEditing ? "Guardar" : "Editar"}</button>{" "}
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? "Marcar pendiente" : "Marcar completo"}
      </button>{" "}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;

