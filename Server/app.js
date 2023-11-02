const express = require("express");
const pool = require('./config/db.js');
const courseRouter = require('./routes/courseRoutes.js');
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await pool.getConnection(); 
    console.log('Connected to the database'); 
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();
app.use('/api/v1',courseRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;

