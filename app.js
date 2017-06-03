const express = require('express');
const server = require('./server/server');

const app = express();

server(app, 3000);
