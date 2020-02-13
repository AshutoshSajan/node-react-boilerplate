const usersService = require('../src/users/users-service');
const authService = require('../src/auth/auth-service');

const authController = {
  loginUser: async function(req, res) {
    const { email, password } = req.body;
    try {
      const mentor = await usersService.findOneByField({ email });
      const response = await authService.loginMentor(mentor, password);

      if (!response) {
        return res.status(401).json({
          success: true,
          message: 'user logged in successfully',
          error: 'Password didnt match.'
        });
      }

      return res.json(response);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'server error', error: err });
    }
  },

  identifyUser: async function(req, res) {
    const userId = req.user._id;

    try {
      const user = await usersService.findOneByField({ _id: userId });
      return res
        .status(200)
        .json({ success: true, message: 'user verified', user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'server error', error: err });
    }
  }
};

module.exports = authController;
