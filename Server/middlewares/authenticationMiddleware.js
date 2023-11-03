const jwt = require('jsonwebtoken');

const checkLoggedIn = async (req, res, next) => {
  // Check if the 'token' cookie exists in the request
  const {token} = req.cookies;
  if (!token) {
    return res.status(401).json({ error: 'You are not logged in' });
  }
  try {
    // Verify the token asynchronously
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    // If the token is valid, add user data to the request object
    req.user = decoded;
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({ message: 'You are not logged in' });
  }
};

module.exports = { checkLoggedIn };

