const express = require('express');
// require Apollo Server
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
// setup for typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// TODO: Determine if /routes can be removed
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//Apollo Server logging plugin
const BASIC_LOGGING = {
  requestDidStart(requestContext) {
      console.log("request started");
      console.group(requestContext)
      return {
          didEncounterErrors(requestContext) {
              console.log("an error happened in response to query " + requestContext.request.query);
              console.log(requestContext.errors);
          }
      };
  },

  willSendResponse(requestContext) {
      console.log("response sent", requestContext.response);
  }
};

// create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [BASIC_LOGGING],
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
}

// app.use(routes);

// NEW DB CONNECTION INSIDE APOLLO SERVER WRAPPER
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
 startApolloServer(typeDefs, resolvers);