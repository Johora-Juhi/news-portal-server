const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News API running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id = '08') {
        res.sendStatus(news);
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews);
})
app.listen(port, () => {
    console.log('Newsportal running om this port', port);
})