const mongoose = require('mongoose');

const { Schema } = mongoose;

// module.exports = mongoose.model('ArticleSchema', ArticleSchema);

const HelloSchema = new Schema({
    hey: String,
});

HelloSchema.set('toJSON', {
    transform: (document, transformedArticle) => {
        transformedArticle.id = transformedArticle._id.toString();
        delete transformedArticle.__v;
        delete transformedArticle._id;
    }
});

module.exports = mongoose.model('HelloSchema', HelloSchema);