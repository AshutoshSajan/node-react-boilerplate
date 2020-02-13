const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const validatorMiddleware = require('../utils/validator-middleware');
const authMiddleware = require('../utils/auth-middleware');

router.post(
  '/login',
  validatorMiddleware.mustHaveFields(['email', 'password']),
  validatorMiddleware.isValidEmail('email'),
  authController.loginUser
);

router.get('/me', authMiddleware.verifyUser, authController.identifyUser);

module.exports = router;
