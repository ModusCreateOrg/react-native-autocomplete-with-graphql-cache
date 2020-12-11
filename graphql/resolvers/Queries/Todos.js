const fetch = require('node-fetch');

module.exports = {
  getTodos: (parent, args, context, info) => {
    try {
      return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => json);
    } catch (error) {
      throw new Error(error);
    }
  },

  getTodo: (parent, args, context, info) => {
    try {
      const { id } = args;
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => json);
    } catch (error) {
      throw new Error(error);
    }
  },
};
