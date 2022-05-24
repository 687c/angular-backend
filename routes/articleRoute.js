const articleRoute = require('express').Router();
const ArticleController = require('../controllers/articleController');
const articleSchema = require('../models/articleSchema');


articleRoute.get('/', async (req, res) => {
    const resp = await ArticleController.getAllArticles();
    // res.status(200).json(resp);
    res.json(resp);
});


articleRoute.post('/create', async (req, res) => {
    const body = req.body;

    const article = {
        title: body.title,
        content: body.content
    }

    try {
        resp = await ArticleController.createArticle(article);
        // console.log("this is the response i got after i created an article -> ", resp);
        res.status(201).json(resp);
    } catch (err) {
        console.error("error cresting the article", err)
    }
});

articleRoute.get('/test', async (req, res) => {
    res.json({ "hello": "world" });
});



module.exports = articleRoute;