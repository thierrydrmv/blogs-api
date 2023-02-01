const { User } = require('../models');

const schema = require('./validations/validateInputValues');

const createNewUser = async ({ displayName, email, password, image }) => {
  const error = schema.validateNewUser({ displayName, email, password });
  if (error.type) return error;
  await User.create({ displayName, email, password, image });
  return { type: null, message: '' };
};

module.exports = {
  createNewUser,
};