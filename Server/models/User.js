// models/User.js
const pool = require("../config/db.js");

const findUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
};

const createUser = async (username, email, password) => {
  const [result] = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  return result.insertId;
};

module.exports = {
  findUserByEmail,
  createUser,
};
