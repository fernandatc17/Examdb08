const { Cliente } = require('../models');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const cliente = await Cliente.create({ username, password });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const cliente = await Cliente.findOne({ where: { username } });
    if (!cliente || cliente.password !== password) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    const clientes = await Cliente.findAll();
    res.json({ mensaje: 'Login exitoso', clientes });
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
