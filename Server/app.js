const express = require("express");
const cookieParser = require('cookie-parser');
const pool = require('./config/db.js');
const courseRouter = require('./routes/courseRoutes.js');
const enrollRouter = require('./routes/enrollmentRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
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
app.use('/api/v1',enrollRouter);
app.use('/api/v1',userRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;

