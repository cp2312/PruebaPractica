const express = require('express');
const productosController = require('../controllers/productosController.js');

const router = express.Router();

router.get('/', productosController.obtenerProductos);
router.get('/:id', productosController.obtenerProducto);
router.post('/', productosController.crearProducto);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
