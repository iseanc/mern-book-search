const { gql } = require('apollo-server-express');

// me(email: String!): User!
const typeDefs = gql`

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
  }

  input BookArgs {
    authors: [String!]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, book: BookArgs!): User
    removeBook(userId: ID!, bookId: String!): User
  }
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;