const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/todoList', {useNewUrlParser: true});
