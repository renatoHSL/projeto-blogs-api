const { userService } = require('../services');
const { createToken } = require('../auth/validateJWT');

const insertNewUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        await userService.createUser({ displayName, email, password, image });
        const token = createToken(email);

        res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getUserId = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserId(id);
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist',
        });
    }

    return res.status(200).json(user);
};

const getUsers = async (_req, res) => {
    try {
        const allUsers = await userService.getUsers();
      
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

module.exports = { 
    insertNewUser,
    getUsers,
    getUserId,
 };