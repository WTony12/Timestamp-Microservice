const express = require('express');
const router = require('./controllers/router');
const server = require('./server/server');
//Initialize express
const app = express();
//Declare static directory
app.use(express.static(__dirname + '/public'));
//Handle routing
router(app);
//Run server
server(app, 3000);
