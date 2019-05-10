const { TodoList } = require('./models.js');

const createTodoHelper = (todo, listName) => {
  return TodoList.create({ todo, listName })
};

const getAllTodosHelper = () => {
  return TodoList.find({});
};

const updateTodoHelper = (id, newTodo) => {
  return TodoList.findOneAndUpdate({ _id: id }, {todo: newTodo});
};

module.exports = {
  createTodoHelper,
  getAllTodosHelper,
  updateTodoHelper
}