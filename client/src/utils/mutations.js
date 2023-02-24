import { gql, useMutation } from '@apollo/client';

// TODO: Add client-side mutations

//LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
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
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



//SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
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
export const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID!, $bookId: String!) {
    removeBook(
      userId: $userId, bookId: $bookId) {
        _id
        bookId
      }
  }
`;