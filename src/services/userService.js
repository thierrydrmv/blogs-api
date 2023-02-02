const { User } = require('../models');

const schema = require('./validations/validateInputValues');

const createNewUser = async ({ displayName, email, password, image }) => {
  const error = schema.validateNewUser({ displayName, email, password });
  if (error.type) return error;
  await User.create({ displayName, email, password, image });
  return { type: null, message: '' };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUser = async (id) => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  return user[0];
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUser,
};