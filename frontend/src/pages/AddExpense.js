// src/pages/AddExpense.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddExpense = ({ setExpenses }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = { description, category, amount };

    axios.post('http://localhost:5000/api/expenses', expense)
      .then(res => {
        setExpenses(prevExpenses => [...prevExpenses, res.data]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1 className="my-4">Agregar Gasto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción del gasto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoría del gasto"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Monto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Monto del gasto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </div>
  );
};

export default AddExpense;
