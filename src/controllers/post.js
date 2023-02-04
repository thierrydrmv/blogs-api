const postService = require('../services/postService');

const getPostById = async (req, res) => {
  const { id } = req.params;
  
  const post = await postService.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

const getPosts = async (_req, res) => {
  const post = await postService.getPosts();

  return res.status(200).json(post);
};

module.exports = { getPostById, getPosts };