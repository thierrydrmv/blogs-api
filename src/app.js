const express = require('express');

const app = express();

const controllers = require('./controllers');

app.use(express.json());

app.post('/login', controllers.loginController);

app.post('/user', controllers.userController);

module.exports = app;
