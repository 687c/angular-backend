const Task = require('../models/task');
const Category = require('../models/category');

const getAllTasks = async (req, res) => {
    try {
        const resp = await Task.find({}).populate('category', { title: 1 });
        res.json(resp);
    } catch (err) {
        console.error("error fetching all tasks -> ", err);
    }
}

const createTask = async (req, res) => {
    const { body } = req;

    const category = await Category.findOne({ title: body.category });

    if (category === null) {
        console.error("Error creating task, because not such category exists...");
        //give option to create a category if it does not exist
        return;
    }

    const taskObject = new Task({
        title: body.title,
        message: body.message,
        category: category.id
    });

    try {
        const resp = await taskObject.save(taskObject);
        // console.log
        res.json(resp);
    } catch (err) {
        console.error("error creating the task ->", err);
    }
}

const updateTask = async (req, res) => {
    const { body } = req;

    const filter = body.title;
    const update = body.message;

    try {
        const updatedTask = Task.findOneAndUpdate(filter, update, {
            new: true
        });
        res.json(updatedTask);
    } catch (err) {
        console.error("error updating the record ->", err);
    }
}

const deleteTask = async (req, res) => {
    const { body } = req;

    const filter = body.title;

    Task.findOneAndDelete(filter, (err, docs) => {
        if (err) {
            console.error("encountered error deleting record -> ", err)
        }
        console.log("deleted record", docs);
    });
}

const getCount = async (req, res) => {
    try {
        const result = await Task.aggregate([
            {
                $group: {
                    _id: '$category',
                    taskCount: { $sum: 1 }
                }
            },
            { $lookup: { from: 'categories', localField: '_id', foreignField: '_id', as: 'category' } }
        ])

        // console.log("this is the result", result);
        const resp = [];
        result.map((res) => {
            const resObject = {
                "title": res.category[0].title,
                "taskCount": res.taskCount
            }
            resp.push(resObject);
        });

        res.json(resp);
    } catch (err) {
        console.error("error getting count of categories -> ", err);
    }
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getCount }