const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getEmail = (email) => {
    const user = User.findOne({ where: { email } });
    return user;
};

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getUserId = async (id) => {
  const user = User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

  module.exports = {
    createUser,
    getEmail,
    getUsers,
    getUserId,
  };