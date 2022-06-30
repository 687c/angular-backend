const Article = require('../models/hello');
const Hello = require('../models/hello');

const getHello = async () => {
    return await Hello.find({});
}
const getAllArticles = async () => {
    return await Article.find({});
}

const createHello = async (helloObject) => {
    const hello = new Hello({
        hey: helloObject.hey,
    });

    const savedHello = await hello.save();
    return savedHello;
}


module.exports = { getHello, createHello }