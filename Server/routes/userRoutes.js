// routes/enrollmentRoutes.js

const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/EnrollmentController');
const { authenticate } = require('../middlewares/authenticationMiddleware');;

// Secured API endpoint
router.get('/secured', authenticate, EnrollmentController.securedEndpoint);

module.exports = router;
