# Todo App - React

## Descripción
Esta es una aplicación de lista de tareas (Todos) desarrollada en React, que permite:
- Navegar entre diferentes páginas
- Crear nuevos todos
- Listar todos existentes
- Marcar todos como completado o pendiente
- Eliminar todos
- Validación básica de formularios
- Manejo de estados de carga y mensajes
- Manejo básico de errores en peticiones

---

## 📂 Estructura del proyecto

- `src/pages/` → Contiene las páginas principales (`Home.jsx`, `Todos.jsx`, `Registro.jsx`)
- `src/components/` → Contiene los componentes reutilizables (`TodoItem.jsx`, `TodoList.jsx`)

---

## 🚀 Tecnologías utilizadas
- React (Vite)
- React Router DOM
- JavaScript
- HTML / CSS

---

## 🔹 Rutas de la aplicación
- `/` → Página principal (Home)  
- `/todos` → Lista de todos con funcionalidades de marcar, eliminar y mostrar mensajes  
- `/registro` → Formulario para crear nuevos todos con validación básica

---

## 💻 Cómo ejecutar el proyecto

### 1. Clonar el repositorio:
```bash
git clone https://github.com/MAICOL-ESNEIDER-SAS/todo-app.git
 
 Instalar dependencias:

npm install


Ejecutar la app:

npm run dev
```

**Abrir en el navegador:**

http://localhost:5173/

## Video demostrativo

**Enlace al video de la app funcionando**


## Commits principales

-feat: creación de estructura inicial con rutas /, /todos y /registro

-feat: componente Todos.jsx con fetch inicial usando useEffect

-feat: implementación de listado de todos desde API

-feat: formulario para crear nuevos todos con validación básica

-feat: función para marcar todos como completado o pendiente

-feat: función para eliminar todos del listado

-feat: estados de carga y mensajes de espera con useState

-feat: manejo básico de errores en peticiones con try/catch

-refactor: separación de lógica en componentes y limpieza