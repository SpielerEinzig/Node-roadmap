const express = require('express');
const todoController = require('../controllers/todo-controllers');


const router = express.Router();

router.get('/', todoController.todo_list);

router.get('/todo/detail/:id', todoController.todo_detail);

router.post('/create/todo', todoController.create_todo);

router.delete('/todo/delete/:id', todoController.delete_todo);

router.put('/todo/update/:id', todoController.update_todo);

module.exports = router;