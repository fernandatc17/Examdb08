const express = require('express');
const router = express.Router();
const controller = require('../controllers/producto.controller');

router.post('/', controller.createProducto);
router.get('/', controller.getProductos);

module.exports = router;
