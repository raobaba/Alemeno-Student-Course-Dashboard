// middlewares/authenticationMiddleware.js

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
  }
};

module.exports = {
  authenticate,
};
