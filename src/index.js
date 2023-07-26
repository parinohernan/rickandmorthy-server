const http = require("http");

//const PORT = 3001;
//const characters = require("./utils/data.js")
const getCharById =require('./controllers/getCharById.js');


// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); //para permitiracceso al servidor que cualquiera pueda hacer servidor "problemas de cords"
    
//     if (req.url === "/"){
//         res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
// 	    res.end('Servidor rick and morty!\n');
//     }
    
//     if (req.url.includes("/rickandmorty/character")) {
//          const id = Number(req.url.split("/").pop());//segmento la url por "/" y con el pop saco el ultimo elemento, LUEGO LO TRANSFORMO A NUMBER
//         getCharById(res, id);

//     }
    
// }).listen(PORT, "localhost");

const express = require('express');
const server = express();
const PORT = 3001;
const router = require ('./routes/index.js');



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
            next();
        });

server.use(express.json());

server.use('/rickandmorty',router);
        
server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});
        