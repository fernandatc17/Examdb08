const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const productoRoutes = require('./routes/producto.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);

module.exports = app;
