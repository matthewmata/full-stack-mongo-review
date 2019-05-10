//https://mongoosejs.com/docs/index.html
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', err => console.log('connection error: ', err));
db.once('open', () => {
  console.log('Successfully connected to the database!')
});

module.exports = db;
