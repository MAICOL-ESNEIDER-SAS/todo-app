import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleComplete, onDelete }) {
  if (todos.length === 0) return <p>No hay todos para mostrar</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;

