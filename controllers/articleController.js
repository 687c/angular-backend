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

module.exports = { createArticle, getAllArticles }