const express = require('express');

const app = express();

const { loginController, userController, categoryController } = require('./controllers');
const { validateJWT, err } = require('./middleware');

app.use(express.json());

app.post('/login', loginController);

app.get('/user', validateJWT, err, userController.getAllUsers);

app.get('/user/:id', validateJWT, err, userController.getUser);

app.post('/user', userController.user);

app.post('/categories', validateJWT, err, categoryController.createNewCategory);

module.exports = app;
