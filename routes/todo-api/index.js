const express = require('express');
const router = express.Router();

const controller = require('../../controller/todo-controller');

router.get('/todo/list', controller.getTodoList);

router.post('/create', controller.createToDo);

router.post('/delete', controller.deleteOneTodo);

module.exports = router;
