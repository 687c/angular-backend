const TaskRoute = require('express').Router();
const taskController = require('../controllers/task');

TaskRoute.get('/', taskController.getAllTasks);

TaskRoute.get('/count', taskController.getCount);

TaskRoute.post('/create', taskController.createTask);

TaskRoute.put('/update', taskController.updateTask);

TaskRoute.delete('/remove', taskController.deleteTask);

module.exports = TaskRoute;