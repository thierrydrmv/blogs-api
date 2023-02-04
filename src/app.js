const express = require('express');

const app = express();

const { 
  loginController, 
  userController, 
  categoryController, 
  postController } = require('./controllers');
const { validateJWT, err } = require('./middleware');

app.use(express.json());

app.post('/login', loginController);

app.get('/user', validateJWT, err, userController.getAllUsers);

app.get('/user/:id', validateJWT, err, userController.getUser);

app.post('/user', userController.user);

app.get('/categories', validateJWT, err, categoryController.getAllCategories);

app.post('/categories', validateJWT, err, categoryController.createNewCategory);

app.get('/post', validateJWT, err, postController.getPosts);

app.get('/post/:id', validateJWT, err, postController.getPostById);

module.exports = app;
