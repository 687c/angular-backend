const categoryRoute = require('express').Router();
const categoryController = require('../controllers/category');
const category = require('../models/category');

categoryRoute.get('/', categoryController.getAllCategories);

categoryRoute.post('/create', categoryController.createCategory);

categoryRoute.get('/test', (req, res) => {
    res.json({ "hello": "task" });
});

module.exports = categoryRoute;