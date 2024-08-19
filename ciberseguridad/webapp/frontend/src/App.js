// Bibliotecas necesarias de React y React-Admin
import "./App.css";
import * as React from "react"; // Importa todas las funciones de React
import { Admin, Resource, ListGuesser } from "react-admin"; // Componentes principales de React-Admin
import jsonServerProvider from "ra-data-json-server"; // Proveedor de datos para conectarse a una API RESTful

// Configura el proveedor de datos para conectarse a la API del backend
const dataProvider = jsonServerProvider("http://localhost:5001/api");

// Componente principal de la aplicación
const App = () => (
  // Admin es el componente base de React-Admin
  <Admin dataProvider={dataProvider}>
    {/* Resource define un recurso (similar a una tabla) en la interfaz de administración */}
    {/* ListGuesser es un componente que adivina cómo mostrar una lista de elementos */}
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);

export default App;
