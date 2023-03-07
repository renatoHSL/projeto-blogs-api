const { userService } = require('../services');

const newUser = async (req, res, next) => {
    const { displayName, email, password } = req.body; 
    const regex = /\S+@\S+\.\S+/;

    const user = await userService.getEmail(email);

    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }

    if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
    }
    if (!email.match(regex)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
    return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }  
    next();
  };
  
  module.exports = {
    newUser,
  };