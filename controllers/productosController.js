const productosModel = require('../models/productosModel');
const productosService = require('../services/productosService');

function obtenerProductos(req, res) {
    productosModel.obtenerTodos((err, productos) => {
        if (err) {
            console.error(err.message);

            return res.status(500).json({
                error: 'Error al obtener los productos'
            });
        }

        res.json(productos);
    });
}

function obtenerProducto(req, res) {
    const id = req.params.id;

    productosModel.obtenerPorId(id, (err, producto) => {
        if (err) {
            console.error(err.message);

            return res.status(500).json({
                error: 'Error al obtener el producto'
            });
        }

        if (!producto) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.json(producto);
    });
}

function crearProducto(req, res) {
    const resultado = productosService.prepararProducto(req.body);

    if (resultado.error) {
        return res.status(400).json({
            error: resultado.error
        });
    }

    productosModel.crear(
        resultado.producto,
        (err, id) => {
            if (err) {
                console.error(err.message);

                return res.status(500).json({
                    error: 'Error al crear el producto'
                });
            }

            res.status(201).json({
                mensaje: 'Producto creado',
                id
            });
        }
    );
}

function actualizarProducto(req, res) {
    const id = req.params.id;
    const resultado = productosService.prepararProducto(req.body);

    if (resultado.error) {
        return res.status(400).json({
            error: resultado.error
        });
    }

    productosModel.actualizar(
        id,
        resultado.producto,
        (err, cambios) => {
            if (err) {
                console.error(err.message);

                return res.status(500).json({
                    error: 'Error al actualizar el producto'
                });
            }

            if (cambios === 0) {
                return res.status(404).json({
                    error: 'Producto no encontrado'
                });
            }

            res.json({
                mensaje: 'Producto actualizado'
            });
        }
    );
}

function eliminarProducto(req, res) {
    const id = req.params.id;

    productosModel.eliminar(id, (err, cambios) => {
        if (err) {
            console.error(err.message);

            return res.status(500).json({
                error: 'Error al eliminar el producto'
            });
        }

        if (cambios === 0) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.json({
            mensaje: 'Producto eliminado'
        });
    });
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};