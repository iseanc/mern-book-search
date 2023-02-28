import { gql } from '@apollo/client';

// TODO: Add queries

//query GET_ME, which will execute the me query set up using Apollo Server.
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }
`;