const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true,
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
