const express = require('express');

const app = express();

const { loginController, userController } = require('./controllers');
const { validateJWT, err } = require('./middleware');

app.use(express.json());

app.post('/login', loginController);

app.get('/user', validateJWT, err, userController.getAllUsers);

app.get('/user/:id', validateJWT, err, userController.getUser);

app.post('/user', userController.user);

module.exports = app;
