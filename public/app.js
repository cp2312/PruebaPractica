const listaProductos = document.getElementById('listaProductos');
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const categoria = document.getElementById('categoria');
const btnAgregar = document.getElementById('btnAgregar');
const btnActualizar = document.getElementById('btnActualizar');
const form = document.getElementById('form');

let productoSeleccionadoId = null;

btnAgregar.addEventListener('click', agregarProducto);
btnActualizar.addEventListener('click', actualizarProducto);

btnActualizar.disabled = true;

function obtenerProductos() {
    fetch('/productos')
<<<<<<< HEAD
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudieron obtener los productos');
            }

            return res.json();
        })
        .then(productos => {
            listaProductos.innerHTML = '';

            productos.forEach(producto => {
                const { id, nombre, precio, stock, categoria } = producto;

                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${precio}</td>
                    <td>${stock}</td>
                    <td>${categoria}</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onclick="editarProducto(${id})"
                        >
                            Editar
                        </button>

                        <button
                            type="button"
                            class="btn btn-danger"
                            onclick="eliminarProducto(${id})"
                        >
                            Eliminar
                        </button>
                    </td>
                `;

                listaProductos.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error al obtener productos:', error.message);
        });
}

obtenerProductos();

function agregarProducto() {
    const nuevoProducto = {
        nombre: nombre.value.trim(),
        precio: Number(precio.value),
        stock: Number(stock.value),
        categoria: categoria.value.trim()
    };

    if (
        nuevoProducto.nombre === '' ||
        nuevoProducto.categoria === '' ||
        precio.value === '' ||
        stock.value === ''
    ) {
        alert('Todos los campos son obligatorios');
        return;
    }

    fetch('/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo agregar el producto');
            }

            return res.json();
        })
        .then(data => {
            console.log(data);

            form.reset();
            obtenerProductos();
        })
        .catch(error => {
            console.error('Error al agregar producto:', error.message);
        });
}

=======
        .then(res => res.json())
        .then(data => {
            listaProductos.innerHTML = '';

            data.forEach(producto => {
                const { id, nombre, precio, stock, categoria } = producto;

                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${precio}</td>
                    <td>${stock}</td>
                    <td>${categoria}</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-eliminar"
                            onclick="eliminarProducto(${id})"
                        >
                            Eliminar
                        </button>

                        <button
                            type="button"
                            class="btn btn-editar"
                            onclick="editarProducto(${id})"
                        >
                            Editar
                        </button>
                    </td>
                `;

                listaProductos.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error al obtener productos:', error);
        });
}

obtenerProductos();

function agregarProducto() {
    const nuevoProducto = {
        nombre: nombre.value.trim(),
        precio: Number(precio.value),
        stock: Number(stock.value),
        categoria: categoria.value.trim()
    };

    if (
        nuevoProducto.nombre === '' ||
        nuevoProducto.categoria === '' ||
        precio.value === '' ||
        stock.value === ''
    ) {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (nuevoProducto.precio < 0 || nuevoProducto.stock < 0) {
        alert('El precio y el stock no pueden ser menores que 0');
        return;
    }

    fetch('/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo agregar el producto');
            }

            return res.json();
        })
        .then(data => {
            console.log(data);

            obtenerProductos();
            form.reset();
        })
        .catch(error => {
            console.error('Error al agregar producto:', error);
        });
}

>>>>>>> dev
function editarProducto(id) {
    productoSeleccionadoId = id;

    fetch(`/productos/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo obtener el producto');
            }

            return res.json();
        })
<<<<<<< HEAD
        .then(producto => {
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            stock.value = producto.stock;
            categoria.value = producto.categoria;
=======
        .then(data => {
            nombre.value = data.nombre;
            precio.value = data.precio;
            stock.value = data.stock;
            categoria.value = data.categoria;
>>>>>>> dev

            btnAgregar.disabled = true;
            btnActualizar.disabled = false;
        })
        .catch(error => {
<<<<<<< HEAD
            console.error('Error al editar producto:', error.message);
=======
            console.error('Error al editar producto:', error);
>>>>>>> dev
        });
}

function actualizarProducto() {
    if (productoSeleccionadoId === null) {
<<<<<<< HEAD
        alert('Primero selecciona un producto para editar');
=======
        alert('Primero selecciona un producto');
>>>>>>> dev
        return;
    }

    const productoActualizado = {
        nombre: nombre.value.trim(),
        precio: Number(precio.value),
        stock: Number(stock.value),
        categoria: categoria.value.trim()
    };

    if (
        productoActualizado.nombre === '' ||
        productoActualizado.categoria === '' ||
        precio.value === '' ||
        stock.value === ''
    ) {
        alert('Todos los campos son obligatorios');
        return;
    }

<<<<<<< HEAD
=======
    if (
        productoActualizado.precio < 0 ||
        productoActualizado.stock < 0
    ) {
        alert('El precio y el stock no pueden ser menores que 0');
        return;
    }

>>>>>>> dev
    fetch(`/productos/${productoSeleccionadoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productoActualizado)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo actualizar el producto');
            }

            return res.json();
        })
        .then(data => {
            console.log(data);

<<<<<<< HEAD
            form.reset();
            obtenerProductos();
=======
            obtenerProductos();
            form.reset();
>>>>>>> dev

            productoSeleccionadoId = null;
            btnAgregar.disabled = false;
            btnActualizar.disabled = true;
        })
        .catch(error => {
<<<<<<< HEAD
            console.error('Error al actualizar producto:', error.message);
=======
            console.error('Error al actualizar producto:', error);
>>>>>>> dev
        });
}

function eliminarProducto(id) {
    const confirmar = confirm('¿Deseas eliminar este producto?');

    if (!confirmar) {
        return;
    }

    fetch(`/productos/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo eliminar el producto');
            }

            return res.json();
        })
        .then(data => {
            console.log(data);
<<<<<<< HEAD

            if (productoSeleccionadoId === id) {
                form.reset();
                productoSeleccionadoId = null;
                btnAgregar.disabled = false;
                btnActualizar.disabled = true;
            }

            obtenerProductos();
        })
        .catch(error => {
            console.error('Error al eliminar producto:', error.message);
=======
            obtenerProductos();
        })
        .catch(error => {
            console.error('Error al eliminar producto:', error);
>>>>>>> dev
        });
}