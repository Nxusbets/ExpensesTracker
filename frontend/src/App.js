// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importación correcta para v6
import Navbar from './components/Navbar';
import AddExpense from './pages/AddExpense';
import ExpensesList from './pages/ExpensesList';

function App() {
  return (
    <Router>
      {/* Componente de navegación común */}
      <Navbar />

      {/* Rutas principales de la aplicación */}
      <Routes>
        {/* Rutas de la aplicación */}
        <Route path="/" element={<ExpensesList />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
