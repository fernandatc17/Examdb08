const { Producto } = require('../models');

exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const producto = await Producto.create({ nombre, descripcion, precio });
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear producto' });
  }
};

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};
