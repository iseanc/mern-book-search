const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: [User]!
  }

  input BookArgs {
    authors: [AuthorArgs!]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }
  
  input AuthorArgs {
    name: String!
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, content: BookArgs!): User
    removeBook(userID: ID!, bookId: String!): User
  }
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: [Author]!
    description: String
    title: String
    image: String
    link: String
  }

  type Author {
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;