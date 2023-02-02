const express = require('express');

const app = express();

const controllers = require('./controllers');
const { validateJWT, err } = require('./middleware');

app.use(express.json());

app.post('/login', controllers.loginController);

app.get('/user', validateJWT, err, controllers.userController.getAllUsers);

app.post('/user', controllers.userController.user);

module.exports = app;
