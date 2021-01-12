const { gql } = require('apollo-server');

module.exports = gql`
  type Todo @cacheControl(maxAge: 30) {
    id: ID
    userId: Int
    title: String
    completed: Boolean
  }

  input TodoInput {
    userId: Int
    title: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID): Todo
  }

  type Mutation {
    addTodo(input: TodoInput): Todo
  }
`;
