const Article = require('../models/articleSchema');

const getAllArticles = async () => {
    return await Article.find({});
}

const createArticle = async (articleObject) => {

    //getting the article object from the param
    const article = new Article({
        title: articleObject.title,
        content: articleObject.content
    });

    const savedArticle = await article.save();
    return savedArticle;
}

const updateArticle = (filter, update) => {
    //find the article
    const updatedArticle = Article.findOneAndUpdate(filter, update, {
        new: true
    });
    return updatedArticle;
}

const deleteArticle = (filter) => {
    //get the id
    Article.findOneAndDelete(filter, (err, docs) => {
        if (err) {
            console.error("encountered error deleting record -> ", err)
        }
        console.log("deleted record", docs);
    });
}

const deleteManyArticles = filter => {
    Article.deleteMany(filter)
}

module.exports = { createArticle, deleteArticle, getAllArticles, updateArticle }