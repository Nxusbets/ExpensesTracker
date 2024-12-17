const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

// Configurar las variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes desde el frontend en localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));
app.use(express.json());  // Permite recibir datos JSON en el cuerpo de la solicitud

// Rutas
app.use('/api/expenses', require('./routes/expensesRoutes'));  // Ruta para manejar los gastos

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Expenses Tracker!');
});

// Puerto y inicio del servidor
const PORT = process.env.PORT || 5000; // Usa el puerto configurado en las variables de entorno o el 5000 por defecto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
