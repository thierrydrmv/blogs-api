const { Category } = require('../models');

const schema = require('./validations/validateInputValues');

const createNewCategory = async ({ name }) => {
  const error = schema.validateNewCategory({ name });
  if (error.type) return error;
  await Category.create({ name });
  return { type: null, message: '' };
};

module.exports = { createNewCategory };