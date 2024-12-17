const Expense = require('../models/Expense');

// Obtener todos los gastos
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los gastos' });
  }
};

// Agregar un nuevo gasto
const addExpense = async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    const newExpense = new Expense({ description, amount, category });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: 'Error al agregar el gasto' });
  }
};

// Eliminar un gasto
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    res.json({ message: 'Gasto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el gasto' });
  }
};

module.exports = { getExpenses, addExpense, deleteExpense };
