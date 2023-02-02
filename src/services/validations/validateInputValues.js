const schema = require('./schemas');

const validateNewUser = ({ displayName, email, password }) => {
  const { error } = schema.newUserSchema.validate({ displayName, email, password });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateNewCategory = ({ name }) => {
  const { error } = schema.newCategorySchema.validate({ name });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateNewUser,
  validateNewCategory,
};