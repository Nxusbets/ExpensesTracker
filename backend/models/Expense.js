const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,  // Agrega las fechas de creación y actualización automáticamente
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
