const mongoDBHelper = require('../database/mongoDBHelpers');

module.exports = {
  get: (req, res) => {
    mongoDBHelper.findAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('ERROR in GET'));
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    mongoDBHelper.createOne(todo, listName)
      .then(() => res.status(200).send('Successful Post'))
      .catch(err => res.status(404).send('ERROR in GET'));
  },
  update: (req, res) => {
    const { todo } = req.body;
    const { _id } = req.params;
    mongoDBHelper.updateOne(todo, _id)
      .then(() => res.status(200).send('Successful Patch'))
      .catch(err => res.status(404).send('ERROR in GET'));
  },
}