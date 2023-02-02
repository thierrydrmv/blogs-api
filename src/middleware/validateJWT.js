const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateJWT = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;

    return next();
  } catch (err) {
    const error = new Error('Expired or invalid token');
    error.statusCode = 401;
    return next(error);
  }
};

module.exports = validateJWT;