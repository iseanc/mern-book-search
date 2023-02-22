const { Book, User} = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    }
  }
};

module.exports = resolvers;