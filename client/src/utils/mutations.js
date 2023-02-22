import { gql } from '@apollo/client';

// TODO: Add client-side mutations

//LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//ADD_USER will execute the addUser mutation.
const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

//SAVE_BOOK will execute the saveBook mutation.
const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $bookId: String!, $title: String!, $description: String!, $authors: [String], $image: String!, $link: String!) {
    saveBook(userId: $userId, bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {
      _id
      bookId
      title
      description
      authors
      image
      link
    }
  }
`;

//REMOVE_BOOK will execute the removeBook mutation.
const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID!, $bookId: String!) {
    removeBook(
      userId: $userId, bookId: $bookId) {
        _id
        bookId
      }
  }
`;

module.exports = { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK};