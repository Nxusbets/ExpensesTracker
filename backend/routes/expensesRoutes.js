const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');  // Suponiendo que tienes un modelo de gasto

// Obtener todos los gastos
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();  // Obtiene todos los gastos de la base de datos
    res.json(expenses);
  } catch (error) {
    console.error('Error al obtener los gastos:', error);
    res.status(500).json({ message: 'Hubo un error al obtener los gastos' });
  }
});

// Crear un nuevo gasto
router.post('/', async (req, res) => {
  const { description, category, amount } = req.body;

  try {
    const newExpense = new Expense({ description, category, amount });
    await newExpense.save();  // Guarda el nuevo gasto en la base de datos
    res.status(201).json(newExpense);  // Responde con el nuevo gasto creado
  } catch (error) {
    console.error('Error al guardar el gasto:', error);
    res.status(500).json({ message: 'Hubo un error al guardar el gasto' });
  }
});

module.exports = router;
