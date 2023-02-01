const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const user = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const oldUser = await loginService.getByEmail(email);
  if (oldUser) {
    return res.status(409).json({ message: 'User already registered' }); 
  }
  
  const { type, message } = await userService
    .createNewUser({ displayName, email, password, image });
  if (type) return res.status(400).json({ message });
  const jwtConfig = {
    expiresIn: '1d',
  };

  const token = jwt.sign({ displayName, email, image }, secret, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = user;