// controllers/AuthController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');;

// Authenticate the user and generate a JWT token
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }
    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
    }
    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token, userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed.' });
  }
};

module.exports = {
  login,
};
