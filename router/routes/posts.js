import express from 'express';
import posts from '../../post-fixtures';

var router = express.Router();

router.get('/', (req, res) => {
  res.render('posts/index', {posts: posts});
});

router.get('/:id/edit', (req, res) => {
  let post = posts.find((post) => {
    return post.id === parseInt(req.params.id);
  });
  res.render('posts/edit', {post: post});
});

router.post('/:id/update', (req, res) => {
  let post = posts.find((post) => {
    return post.id === parseInt(req.params.id);
  });

  post.title = req.body.title
  post.body = req.body.body;

  res.redirect('/posts');
});

export default router;
