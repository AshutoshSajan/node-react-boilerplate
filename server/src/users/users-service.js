var usersDAL = require('./users-DAL');

var usersService = {
  findOneByField: async function(fieldNameObj) {
    return await usersDAL.findOneByField(fieldNameObj);
  }
};

module.exports = usersService;
