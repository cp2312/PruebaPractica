const express = require('express');
const express=require('express');
const path=require('path');
const db=require('./database/db');


const app=express();
const PORT=3000;

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.get('/productos',(req,res)=>{

 db.all('SELECT * FROM productos',(err,rows)=>{
        if(err){
            console.error('Error buscando los libros:',err.message);
            res.status(500).json({error:'Error buscando libros'});
        } else{
            res.json(rows);
        }   

    });
});


app.get('/productos/:id',(req,res)=>{
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

app.post('/productos',(req,res)=>{
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

app.put('/productos/:id',(req,res)=>{
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

app.delete('/productos/:id',(req,res)=>{
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

app.listen(PORT,()=>{
    console.log(`EL servidor esta corriendo en http://localhost:${PORT}`);
}   );

