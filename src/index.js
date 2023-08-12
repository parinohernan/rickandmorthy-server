const http = require("http");

const { conn } = require('./DB_connection');
//const PORT = 3001;
//const characters = require("./utils/data.js")
const getCharById =require('./controllers/getCharById.js');

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
        


server.listen(PORT, async () => {
    await conn.sync( {force : false});
    console.log('Server raised in port: ' + PORT);
});