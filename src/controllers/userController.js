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

module.exports = { insertNewUser };