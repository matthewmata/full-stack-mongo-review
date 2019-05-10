const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/todoList')
  .get(controllers.get)
  .post(controllers.post)
  .patch(controllers.update)

module.exports = router;