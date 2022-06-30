const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    title: String,
});

CategorySchema.set('toJSON', {
    transform: (document, transformedCategory) => {
        transformedCategory.id = transformedCategory._id.toString();
        delete transformedCategory.__v;
        delete transformedCategory._id;
    }
});

module.exports = mongoose.model('Category', CategorySchema);