const { Category } = require('../models');

const schema = require('./validations/validateInputValues');

const createNewCategory = async ({ name }) => {
  const error = schema.validateNewCategory({ name });
  if (error.type) return error;
  await Category.create({ name });
  return { type: null, message: '' };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = { createNewCategory, getAllCategories };