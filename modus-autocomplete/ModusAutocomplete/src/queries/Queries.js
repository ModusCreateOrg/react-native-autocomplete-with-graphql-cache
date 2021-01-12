import gql from 'graphql-tag';

const GET_TODOS = gql`
  query getTodos {
    getTodos {
      id
      userId
      title
      completed
    }
  }
`;

export default GET_TODOS;
