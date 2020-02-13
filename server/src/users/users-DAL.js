const User = require('../../models/User');

const usersDAL = {
  findOneByField: async function(fieldNameObj) {
    return await User.findOne(fieldNameObj);
  }
};

module.exports = usersDAL;
