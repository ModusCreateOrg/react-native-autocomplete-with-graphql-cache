const fetch = require('node-fetch');

const Query = {
  getTodos: (parent, args, context, info) =>
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err)),

  getTodo: (parent, args, context, info) => {
    const { id } = args;
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },
};

module.exports = Query;
