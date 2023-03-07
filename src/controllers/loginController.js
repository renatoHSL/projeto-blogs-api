require('dotenv/config');
const { loginService } = require('../services');
const { createToken } = require('../auth/validateJWT');

const isLoginValid = (email, password) => email && password;

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!isLoginValid(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
        const user = await loginService.getEmail(email, password);
        if (!user) {
            return res.status(400).json({ message: 'Invalid fields' });
        }

        const { password_, ...userWithoutPassword } = user.dataValues;
        const token = createToken(userWithoutPassword);

        res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = login;