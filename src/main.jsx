import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

// Páginas
import Home from "./pages/Home.jsx";
import Todos from "./pages/Todos.jsx";
import Registro from "./pages/Registro.jsx";

// Componente Navbar
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Menú de navegación siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

