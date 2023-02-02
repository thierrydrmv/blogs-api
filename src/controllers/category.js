const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoryService.createNewCategory({ name });
  if (type) return res.status(400).json({ message });
  return res.status(201).json({ name });
};

module.exports = { createNewCategory };