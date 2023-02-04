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

const getPosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return post;
};

module.exports = { getPostById, getPosts };