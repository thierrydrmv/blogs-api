const { BlogPost } = require('../models');
const { User, Category } = require('../models');

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id }, 
  });

  return post;
};

module.exports = { getPostById };