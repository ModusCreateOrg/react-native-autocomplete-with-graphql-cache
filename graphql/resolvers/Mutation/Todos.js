const fetch = require('node-fetch');

module.exports = {
  addTodo: async (parent, args, context, info) => {
    try {
      const {
        input: { title, completed, userId },
      } = args;
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todo',
        {
          method: 'POST',
          body: JSON.stringify({
            title,
            completed,
            userId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const todo = await response.json();
      return todo;
    } catch (error) {
      throw new Error(error);
    }
  },
};
