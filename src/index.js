//src/index.js
const express = require('express');
const db = require('./db/connection');
const meseroRoutes = require('./routes/meseroRoutes');
const mesasRoutes = require('./routes/mesasRoutes');
const platillosRoutes = require('./routes/platillosRoutes');
const bebidasRoutes = require('./routes/bebidasRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes');
const detalleTicketRoutes = require('./routes/detalleTicketRoutes');
const ventasDiariasRoutes = require('./routes/ventasDiariasRoutes');
const ventasRoutes = require('./routes/ventasRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Encabezados permitidos
  next();
});
//app.use(express.urlencoded({ extended: true }));

// Conectar a la base de datos
db.connect();

// Antes de configurar las rutas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Configurar rutas
app.use('/meseros', meseroRoutes);
app.use('/mesas', mesasRoutes);
app.use('/platillos', platillosRoutes);
app.use('/bebidas', bebidasRoutes);
app.use('/tickets', ticketsRoutes);
app.use('/detalleTickets', detalleTicketRoutes);
app.use('/ventas-diarias', ventasDiariasRoutes);
app.use('/venta', ventasRoutes);


// Después de configurar las rutas
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
