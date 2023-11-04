const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/User');

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser(username, email, hashedPassword);
    res.json({ message: 'Signup successful', user: { id: userId, username, email } });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Signup failed' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    // Store the token in a secure HttpOnly cookie
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    
    res.json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};
const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser
};
