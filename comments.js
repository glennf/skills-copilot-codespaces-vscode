// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// Create app
const app = express();
// Use middlewares
app.use(bodyParser.json());
app.use(cors());
// Create comments object
const commentsByPostId = {};
// Create routes
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { id } = req.params;
  const { content } = req.body;
  const comments = commentsByPostId[id] || [];
  comments.push({ id: commentId, content, status: 'pending' });
  commentsByPostId[id] = comments;
  res.status(201).send(comments);
});
app.listen(4001, () => {
  console.log('Listening on 4001');
});