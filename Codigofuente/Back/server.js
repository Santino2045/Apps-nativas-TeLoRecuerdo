const express = require('express');
const cors = require('cors');
const { Client } = require('pg')
const corsOptions = {
  origin: ['http://localhost:8100', 'http://localhost:4200'],
};

const clientSQL = new Client({
    user : 'postgres.eybipfpgubaqouvctavy',
    password : 'Hola123!!¿!!',
    database : 'postgres',
    host : 'aws-1-us-east-2.pooler.supabase.com',
    port : 6543
});

clientSQL.connect()
.then(() => console.log('Conexion exitosa'))
.catch(err => console.error('Error en la conexion a la base de datos', err.stack))

const app = express();
app.use(cors(corsOptions));
const PORT = 3010;

app.use(express.json());

//Obtengo todos los productos
app.get('/productos', async (req, res) => {
    const query = 'SELECT * FROM productos ORDER BY id';

    try {
        const resultados = await clientSQL.query(query);

        res.json(resultados.rows);

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});

//Obtengo producto por nombre
app.get('/productos/nombre/:nombre', async (req, res) => {
    const nombre = req.params.nombre;
    const query = 'SELECT * FROM productos WHERE nombre = $1';
    const values = [nombre];

    try {
        const resultados = await clientSQL.query(query, values);

        res.json(resultados.rows[0]);

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});

//Obtengo producot por ID
app.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM productos WHERE id = $1';
    const values = [id];

    try {
        const resultados = await clientSQL.query(query, values);

        res.json(resultados.rows[0]);

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});

//Crear un producto
app.post('/productos', async (req, res) => {
    //console.log(req.body);
    const {nombre, precio, stock, descripcion } = req.body;
    const query = 'INSERT INTO productos (nombre, precio, stock, descripcion) VALUES( $1, $2, $3, $4 )';
    const values = [nombre, precio, stock, descripcion];

    try {
        const resultados = await clientSQL.query(query, values);

        res.status(201).json({ mensaje : 'Producto dado de alta' });

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});

//Actualizar un producto
app.put('/productos/:id', async (req, res) => {
    //console.log(req.body);
    const id = req.params.id;
    const {stock} = req.body;
    const query = 'UPDATE productos SET stock = $1 WHERE id = $2';
    const values = [stock, id];

    try {
        const resultados = await clientSQL.query(query, values);

        if(resultados.rowCount === 0){
           return res.status(404).send('Producto no encontrado');     
        }

        res.status(200).json({ mensaje : 'Stock modificado de manera correcta'});

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});

//Borrado fisico de un producto
app.delete('/productos/:id', async (req, res) => {
    //console.log(req.body);
    const id = req.params.id;
    const query = 'DELETE FROM productos WHERE id = $1';
    const values = [id];

    try {
        const resultados = await clientSQL.query(query, values);

        if(resultados.rowCount === 0){
           return res.status(404).send('Producto no encontrado');     
        }

        res.status(200).send('Producto eliminado correctamente');

    } catch(err) {
        console.error(err);
        res.status(500).send('Error al obtener los productos');
    }
});


app.listen(PORT, () => {
    console.log("Servidor levantado en el puerto " + PORT);
});