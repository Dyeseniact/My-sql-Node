const express = require('express'); // libreria

const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
//definir el servidor y montar servidor en express
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public'); //hacer publico la carpeta
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //habilitar la carpeta publica

//IO mantiene una conexion directa con el servidor = esta es la comunicacion con el backend
module.exports.io = socketIO(server);
require('./sockets/socket');

//server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});