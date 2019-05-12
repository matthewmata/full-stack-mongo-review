const mongoose = require('mongoose');
const db = require('./index');

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  listName: { type: String, require: true }
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos