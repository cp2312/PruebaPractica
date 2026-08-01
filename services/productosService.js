function prepararProducto(datos) {
    const producto = {
        nombre: String(datos.nombre || '').trim(),
        precio: Number(datos.precio),
        stock: Number(datos.stock),
        categoria: String(datos.categoria || '').trim()
    };

    if (!producto.nombre || !producto.categoria) {
        return { error: 'El nombre y la categoría son obligatorios' };
    }

    if (!Number.isFinite(producto.precio) || producto.precio < 0) {
        return { error: 'El precio debe ser un número mayor o igual a cero' };
    }

    if (!Number.isInteger(producto.stock) || producto.stock < 0) {
        return { error: 'El stock debe ser un número entero mayor o igual a cero' };
    }

    return { producto };
}

module.exports = { prepararProducto };
