const { AuthenticationError } = require('apollo-server-express');
const { Book, User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
 Query: {
  users: async () => {
    return await User.find({});
  },
  me: async (parent, { email } ) => {
    return await User.findOne({ email: email });
  },
 },

 Mutation: {
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
  },
  addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);

    return { token, user };
  },
  saveBook: async (parent, { userId, book }) => {
    return User.findOneAndUpdate(
      { _id: userId},
      { $addToSet: { savedBooks: book} },
      { new: true, runValidators: true }
    );
  },
  removeBook: async (parent, { userId, bookId}) => {
    return User.findOneAndUpdate(
      { _id: userId},
      { $pull: {savedBooks: {bookId: bookId}}},
      { returnDocument: true }
    );
  },
 }
}

module.exports = resolvers;