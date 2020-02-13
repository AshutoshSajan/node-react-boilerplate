var jwt = require('jsonwebtoken');

var authMiddleware = {
  verifyUser: function(req, res, next) {
    var token = req.headers.Authorization || req.headers.authorization;

    if (!token) {
      return res.status(403).json({ error: 'Not authorized.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, function(err, decodedObj) {
      if (err) {
        return res.status(403).json({ error: 'Not authorized.' });
      }

      req.user = decodedObj;
      next();
    });
  }
};

module.exports = authMiddleware;
