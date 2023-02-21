import { gql } from '@apollo/client';

// TODO: Add client-side mutations

//LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
const LOGIN_USER = gql``;

//ADD_USER will execute the addUser mutation.
const ADD_USER = gql``;

//SAVE_BOOK will execute the saveBook mutation.
const SAVE_BOOK = gql``;

//REMOVE_BOOK will execute the removeBook mutation.
const REMOVE_BOOK = gql``;

module.exports = { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK};