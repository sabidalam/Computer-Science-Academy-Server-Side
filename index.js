const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const topics = require('./data/topics.json');



app.use(cors());

app.get('/topics', (req, res) => {
    res.send(topics);
})


app.listen(port, () => {
    console.log('Computer Science', port);
})