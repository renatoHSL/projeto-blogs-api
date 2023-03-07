const { verifyToken } = require('../auth/validateJWT');

const tokenVal = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
    verifyToken(authorization);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
    tokenVal,
};