const express = require('express');

const app = express();

const controllers = require('./controllers');

app.use(express.json());

app.post('/login', controllers.loginController);

module.exports = app;
