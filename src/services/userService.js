const { User } = require('../models');

const getEmail = (email) => {
    const user = User.findOne({ where: { email } });
    return user;
};

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
  };

  module.exports = {
    createUser,
    getEmail,
  };