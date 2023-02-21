const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type A {
    _id: ID!
  }
  type B {
    _id: ID!
  }
  type Query {
    A: A 
    B: B 
  }
`;

module.exports = typeDefs;