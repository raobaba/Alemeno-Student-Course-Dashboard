// models/User.js
const pool = require("../config/db.js");

// Function to find a user by their email
const findUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
};

module.exports = {
  findUserByEmail,
};
