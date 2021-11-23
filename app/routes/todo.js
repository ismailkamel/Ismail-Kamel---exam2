const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/todo', todoController.getTodo);
router.get('/todo', todoController.getTodoID);
router.get('/todo', todoController.getTodoTodo);
router.get('/todo', todoController.createTodo);
router.get('/todo', todoController.updateTodo);
router.get('/todo', todoController.deleteTodo)


module.exports = router;
