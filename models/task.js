const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: String,
    message: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

TaskSchema.set('toJSON', {
    transform: (document, transformedTask) => {
        transformedTask.id = transformedTask._id.toString();
        delete transformedTask.__v;
        delete transformedTask._id;
    }
});

module.exports = mongoose.model('Task', TaskSchema);