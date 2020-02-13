const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const validatorMiddleware = require('../utils/validator-middleware');
const authMiddleware = require('../utils/auth-middleware');

const usersController = require('../controllers/usersController');

module.exports = router;
