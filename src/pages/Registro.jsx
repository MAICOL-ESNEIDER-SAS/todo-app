import React, { useState } from "react";

function Registro() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica: no puede estar vacío
    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }

    setError("");

    // Aquí se mostraría en consola (por ahora, no hay API de POST)
    console.log("Nuevo todo:", { title, completed: false });

    // Limpiar el formulario
    setTitle("");
  };

  return (
    <div>
      <h1>Registrar nuevo Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Registro;
