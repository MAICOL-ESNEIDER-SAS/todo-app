import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px", backgroundColor: "#f0f0f0", padding: "10px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/todos" style={{ marginRight: "10px" }}>Todos</Link>
      <Link to="/registro">Registro</Link>
    </nav>
  );
}

export default Navbar;
