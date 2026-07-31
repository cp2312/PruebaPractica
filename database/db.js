const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'productos.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
        return;
    
    }
    console.log('Connected to the database');

    db.run('CREATE TABLE IF NOT EXISTS productos (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, precio REAL, stock INTEGER, categoria TEXT)' , (err) => {
        if (err) {
            console.error(err.message);
            return;
            
        }
        console.log('Tabla de animales creada o ya existe');
    } 
);


});
module.exports=db;