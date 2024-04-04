const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Pagina principal')
})

app.get('/clientes', (req, res) => {
    const clientes = ['Cliente 1, Cliente 2, Cliente 3']
    res.json('clientes');
})

app.get('/productos', (req, res) => {
    const productos = ['Producto 1, Producto 2, Producto 3']
    res.json('productos');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor express funcionando en el puerto $(PORT)')
})