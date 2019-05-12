const router = require('express').Router();
const controller = require('./controller');

router.route('/todoList')
  .get(controller.get)
  .post(controller.post);

router.route('/todoList/:_id')
  .patch(controller.update);

module.exports = router;