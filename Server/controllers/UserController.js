const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findStudentByEmail, createStudent ,updateStudentPassword} = require('../models/User');

const signupStudent = async (req, res) => {
  const { name, email, password } = req.body; 
  try {
    const existingUser = await findStudentByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createStudent(name, email, hashedPassword); 
    res.json({ message: 'Signup successful', user: { id: userId, name, email } });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Signup failed' });
  }
};

const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findStudentByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // Password matches, generate a token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    // Store the token in a secure HttpOnly cookie
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email }, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

const logoutStudent = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
};

module.exports = {
  signupStudent,
  loginStudent,
  logoutStudent,
};
