const articleRoute = require('express').Router();
const ArticleController = require('../controllers/articleController');

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

articleRoute.put('/', async (req, res) => {
    //TODO
    // const {id }= req.params;
    const { body } = req;
    const { title, content } = body; //filter to be used to find record
    // const { content } = body; //update to be applied

    //part two
    const filter = { title }
    const update = { content }

    console.log("the body -> ", body);
    console.log("calling dot here -> ", body.filter);
    console.log("update ->", update, "filter -> ", filter);

    try {
        let resp = await ArticleController.updateArticle(filter, update);
        // console.log("updated selected query successfully with resp", resp);
        res.status(201).json(resp);
    } catch (err) {
        console.log("there was an error updating the record");
    }
});

articleRoute.delete('/', async (req, res) => {
    //TODO
    // const {id} = req.params;

    const { body } = req;
    const { title } = body; //filter to be used to find record

    //part two
    const filter = { title }

    console.log("the body -> ", body);
    console.log("calling dot here -> ", body.filter);

    try {
        let resp = await ArticleController.deleteArticle(filter);
        // console.log("updated selected query successfully with resp", resp);
        res.status(201).json(resp);
    } catch (err) {
        console.log("there was an error deleting the record");
    }
});

articleRoute.get('/test', async (req, res) => {
    res.json({ "hello": "world" });
});



module.exports = articleRoute;