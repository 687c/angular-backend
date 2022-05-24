const mongoose = require('mongoose');

const {Schema} = mongoose;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    }
});

ArticleSchema.set('toJSON', {
    transform: (document, transformedArticle) => {
        transformedArticle.id = transformedArticle._id.toString();
        delete transformedArticle.__v;
        delete transformedArticle._id;
    }
});

module.exports = mongoose.model('ArticleSchema', ArticleSchema);