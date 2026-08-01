const db = require('../database/db');

function obtenerTodos(callback) {
    db.all(
        'SELECT * FROM productos ORDER BY id DESC',
        callback
    );
}

function obtenerPorId(id, callback) {
    db.get(
        'SELECT * FROM productos WHERE id = ?',
        [id],
        callback
    );
}

function crear(producto, callback) {
    const { nombre, precio, stock, categoria } = producto;

    db.run(
        `INSERT INTO productos (nombre, precio, stock, categoria)
         VALUES (?, ?, ?, ?)`,
        [nombre, precio, stock, categoria],
        function (err) {
            callback(err, this?.lastID);
        }
    );
}

function actualizar(id, producto, callback) {
    const { nombre, precio, stock, categoria } = producto;

    db.run(
        `UPDATE productos
         SET nombre = ?, precio = ?, stock = ?, categoria = ?
         WHERE id = ?`,
        [nombre, precio, stock, categoria, id],
        function (err) {
            callback(err, this?.changes);
        }
    );
}

function eliminar(id, callback) {
    db.run(
        'DELETE FROM productos WHERE id = ?',
        [id],
        function (err) {
            callback(err, this?.changes);
        }
    );
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};