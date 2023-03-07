const { User } = require('../models');

const getEmail = async (email) => {
    const user = await User.findOne({
        where: { email },
    });
    return user;
};

module.exports = {
    getEmail,
};