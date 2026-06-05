const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/authControllers.js');
const { userValidation } = require('../middleware/authmiddleware.js');

// Auth routes
router.post('/signup', authcontrollers.signup_post);
router.post('/login', authcontrollers.login_post);

// Workspace validation route
router.post('/workspace', userValidation);

module.exports = router;
