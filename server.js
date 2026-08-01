<<<<<<< HEAD

const express=require('express');
const path=require('path');
const db=require('./database/db');


const server=express();

const PORT=3000;
=======
const express = require('express');
const path = require('path');
const productosRoutes = require('./routes/productosRoutes');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> dev

app.use(express.static(path.join(__dirname, 'public')));

app.use('/productos', productosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});