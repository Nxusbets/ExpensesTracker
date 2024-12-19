import React from 'react';
import ReactDOM from 'react-dom/client'; // Importación para crear la raíz
import App from './App';


// Crear la raíz con el nuevo API de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación dentro de la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
