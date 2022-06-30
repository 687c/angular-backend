const helloRoute = require('express').Router();
const helloController = require('../controllers/hello');

helloRoute.get('/', async (req, res) => {
    const resp = await helloController.getHello();
    res.json(resp);
});

helloRoute.post('/create', async (req, res) => {
    const body = req.body;

    const hello = {
        hey: body.hey,
    }

    try {
        resp = await helloController.createHello(hello);
        // console.log("this is the response i got after i created an article -> ", resp);
        res.status(201).json(resp);
    } catch (err) {
        console.error("error cresting the article", err)
    }
});

helloRoute.get('/test', async (req, res) => {
    res.json({ "hello": "world" });
});



module.exports = helloRoute;