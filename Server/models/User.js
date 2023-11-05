// models/User.js
const pool = require("../config/db.js");

const findStudentByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM students WHERE student_email = ?', [email]);
  return rows[0] || null;
};

const updateStudentPassword = async (email, password) => {
  const [result] = await pool.query('UPDATE students SET password = ? WHERE student_email = ?', [password, email]);
  return result.affectedRows > 0;
};

const createStudent = async (name, email, password) => { 
  const [result] = await pool.query('INSERT INTO students (student_name, student_email, password) VALUES (?, ?, ?)', [name, email, password]);
  return result.insertId;
};

module.exports = {
  findStudentByEmail, 
  updateStudentPassword,
  createStudent, 
};
