const { BlogPost, User, Category } = require('../models');
// const BlogPost = require('../models/BlogPost');

const getPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, through: { attributes: [] }, as: 'categories' },
    ],
  });

  return posts;
};

module.exports = {
  getPost,
};
