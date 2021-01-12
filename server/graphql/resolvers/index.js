const todoMutation = require('./Mutation');
const todoQueries = require('./Queries');

const Query = {
  ...todoQueries,
};

const Mutation = {
  ...todoMutation,
};

module.exports = {
  Query,
  Mutation,
};
