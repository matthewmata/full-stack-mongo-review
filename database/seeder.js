const Todos = require('./models');
const seedData = require('../data/seedData.json');

const seeder = (data) => {
  Todos.create(data)
    .then(() => console.log('seeded'))
    .catch(err => console.log('ERROR in SEEDER'));
}

seeder(seedData);