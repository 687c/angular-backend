const Category = require('../models/category');

const getAllCategories = async (req, res) => {
    // return await Category.find({});
    try {
        const resp = await Category.find({});
        res.json(resp);
    } catch (err) {
        console.error("error fetching the categories -> ", err);
    }
}

const createCategory = async (req, res) => {
    const categoryObject = {
        title: req.body.title,
    }

    try {
        const result = await Category.create(categoryObject);
        res.status(201).json(result);
    } catch (err) {
        console.error("error creating the category ->", err);
        res.status(500).json(err);
    }
}

module.exports = { getAllCategories, createCategory };
