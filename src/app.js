const express = require('express');

const app = express();

const controllers = require('./controllers');
const { validateJWT, err } = require('./middleware');

app.use(express.json());

app.post('/login', controllers.loginController);

app.get('/user', validateJWT, err, controllers.userController.getAllUsers);

app.get('/user/:id', validateJWT, err, controllers.userController.getUser);

app.post('/user', controllers.userController.user);

module.exports = app;
