const express = require('express');
const express=require('express');
const path=require('path');
const db=require('./database/db');


const server=express();
const PORT=3000;

server.use(express.json());

server.use(express.static(path.join(__dirname,'public')));

server.get('/productos',(req,res)=>{

 db.all('SELECT * FROM productos',(err,rows)=>{
        if(err){
            console.error('Error buscando los libros:',err.message);
            res.status(500).json({error:'Error buscando libros'});
        } else{
            res.json(rows);
        }   

    });
});


server.get('/productos/:id',(req,res)=>{
    const {id}=req.params;
    db.get('SELECT * FROM productos WHERE id=?',[id],(err,row)=>{
        if(err){
            console.error('Error buscando libro:',err.message);
            res.status(500).json({error:'Error fetching libro'});
        }
        else if(!row){
            res.status(404).json({error:'Libro not found'});
        } else{
            res.json(row);
        }
    });
});

server.post('/productos',(req,res)=>{
    const {nombre,precio,stock,categoria}=req.body;
    db.run('INSERT INTO productos (nombre,precio,stock,categoria) VALUES (?,?,?,?)',[nombre,precio,stock,categoria],(err)=>{
        if(err){
            console.error('Error insertando el  producto:',err.message);
            res.status(500).json({error:'Error insertando producto'});
        } else{
            res.json({mensaje:'Producto insertado'});
        }
    });
});

server.put('/productos/:id',(req,res)=>{
    const {id}=req.params;
    const {nombre,precio,stock,categoria}=req.body;
    db.run('UPDATE productos SET nombre=?,precio=?,stock=?,categoria=? WHERE id=?',[nombre,precio,stock,categoria,id],(err)=>{
        if(err){
            console.error('Error actualizando el producto:',err.message);
            res.status(500).json({error:'Error actualizando producto'});
        } else{
            res.json({mensaje:'Producto actualizado'});
        }
    });
});

server.delete('/productos/:id',(req,res)=>{
    const {id}=req.params;
    db.run('DELETE FROM productos WHERE id=?',[id],(err)=>{
        if(err){
            console.error('Error eliminando el producto:',err.message);
            res.status(500).json({error:'Error eliminando producto'});
        } else{
            res.json({mensaje:'Producto eliminado'});
        }
    });
});

server.listen(PORT,()=>{
    console.log(`EL servidor esta corriendo en http://localhost:${PORT}`);
}   );

