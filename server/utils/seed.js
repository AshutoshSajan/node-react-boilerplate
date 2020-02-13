const User = require('../models/User');

User.find({}).exec(function(err, users) {
  if (users.length === 0) {
    const admin = new User({
      name: 'dev_ashu',
      email: 'admin@altcampus.io',
      password: 'qwerty123'
    });

    admin.save();
  }
});
