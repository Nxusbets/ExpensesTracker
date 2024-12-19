import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExpensesList = ({ expenses }) => {
  // Verifica que expenses sea un arreglo antes de intentar mapear
  if (!Array.isArray(expenses)) {
    return <div>No se han encontrado gastos.</div>; // Mensaje de error si expenses no es un arreglo
  }

  return (
    <div>
      <h1 className="my-4">Lista de Gastos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Monto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No hay gastos registrados</td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={expense._id}>
                <td>{index + 1}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>
                  <Button variant="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Link to="/add-expense">
        <Button variant="primary">Agregar Gasto</Button>
      </Link>
    </div>
  );
};

export default ExpensesList;
