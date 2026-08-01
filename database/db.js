const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'productos.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    } else {

    console.log('Connected to the SQLite database.');

    db.run(`CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
        stock INTEGER NOT NULL,
        precio REAL NOT NULL,
        categoria TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Error creando tablas:', err.message);
        } else {

        console.log('Table "productos" created or already exists.');
        }
    });
  }
});



module.exports = db;

