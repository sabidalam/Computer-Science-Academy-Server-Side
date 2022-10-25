const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const topics = require('./data/topics.json');

const courses = require('./data/courses.json');

app.use(cors());

app.get('/topics', (req, res) => {
    res.send(topics);
})

app.get('/topic/:id', (req, res) => {
    const id = req.params.id;
    const selectedTopic = courses.find(t => t.topic_id === id)
    res.send(selectedTopic);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id)
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Computer Science', port);
})