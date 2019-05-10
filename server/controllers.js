const { createTodoHelper, getAllTodosHelper, updateTodoHelper } = require('../database/mongoDBHelpers.js');

module.exports = {
  get: (req, res) => {
    console.log('IN GET');

    getAllTodosHelper()
      .then(todos => {
        res.status(200).send(todos);
      })
      .catch(err => {
        res.status(404).send('Error getting todos', err);
      });
  },

  post: (req, res) => {
    console.log('IN POST');
    const { todo, listName } = req.body;

    createTodoHelper(todo,listName)
      .then(() => {
        res.status(201).send('Success creating todo');
      })
      .catch(err => {
        res.status(404).send('Error creating todo', err);
      });
  },

  update: (req, res) => {
    console.log('IN UPDATE');
    const { id, newTodo } = req.body;

    updateTodoHelper(id, newTodo)
      .then(() => {
        res.status(201).send('Success updating todo');
      })
      .catch(err => {
        res.status(404).send('Error updating', err);
      });

  }
};