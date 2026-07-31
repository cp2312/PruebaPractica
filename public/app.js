const listaProductos = document.getElementById('listaProductos')
const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const stock = document.getElementById('stock')
const categoria = document.getElementById('categoria')
const btnAgregar = document.getElementById('btnAgregar')
const btnActualizar = document.getElementById('btnActualizar')
const form = document.getElementById('form')

btnAgregar.addEventListener('click',agregarProducto)
btnActualizar.addEventListener('click',actualizarProducto)

function obtenerProductos(){
    fetch('/productos')
    .then(res => res.json())
    .then(data => {
        listaProductos.innerHTML=''
        data.forEach(producto => {
            const {id,nombre,precio,stock,categoria}=producto
            const tr = document.createElement('tr')
            tr.innerHTML=`<td>${id}</td><td>${nombre}</td><td>${precio}</td><td>${stock}</td><td>${categoria}</td><td><button type="button" class="btn btn-danger">Eliminar</button></td>`
            listaProductos.appendChild(tr)
        })
    })
}

obtenerProductos()

function agregarProducto(){
    fetch('/productos',{
        method:'POST',
        body:JSON.stringify({
            nombre:nombre.value,
            precio:precio.value,
            stock:stock.value,
            categoria:categoria.value
        })
    })
        .then(res => res.json())
        .then(data => {
            obtenerProductos()
            nombre.value=''
            precio.value=''
            stock.value=''
            categoria.value=''
            form.reset()
        })
}

function editarProducto(id){
    fetch(`/productos/${id}`)
        .then(res => res.json())
        .then(data => {
            nombre.value=data.nombre
            precio.value=data.precio
            stock.value=data.stock
            categoria.value=data.categoria
        })
}   

function actualizarProducto(){
    fetch(`/productos/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            nombre:nombre.value,
            precio:precio.value,
            stock:stock.value,
            categoria:categoria.value
        })
    })
        .then(res => res.json())
        .then(data => {
            obtenerProductos()
            nombre.value=''
            precio.value=''
            stock.value=''
            categoria.value=''
            form.reset()
        })           
    }   

    function eliminarProducto(id){
        fetch(`/productos/${id}`,{
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                obtenerProductos()
            })
    }   
    
