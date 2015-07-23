import postModel from '../models/post';

export default {

  index(req, res) {
    postModel.find({}, (posts) => {
      res.render('posts/index', {posts: posts});
    });
  },

  show(req, res) {
    postModel.find({id: req.params.id}, (post) => {
      res.render('posts/show', {post: post});
    });
  },

  edit(req, res) {
    postModel.find({id: req.params.id}, (post) => {
      res.render('posts/edit', {post: post});
    });
  },

  update(req, res) {
    postModel.find({id: req.params.id}, (post) => {
      post.title = req.body.title
      post.body = req.body.body;

      res.redirect(`/posts/${req.params.id}`);
    });
  },

  destroy(req, res) {
    postModel.destroy(req.params.id, () => {
      res.redirect('/posts');
    });
  }
}
