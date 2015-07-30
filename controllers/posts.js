import postModel from '../models/post';

export default {

  index(req, res) {
    postModel.find({}).then((posts) => {
      res.render('posts/index', {posts: posts});
    });
  },

  new(req, res) {
    res.render('posts/new', {csrfToken: res.locals.csrf});
  },

  create(req, res) {
    postModel.create(req.body, (post) => {
      res.redirect(`posts/${post.get('id')}`);
    });
  },

  show(req, res) {
    postModel.find({id: req.params.id}).then((post) => {
      res.render('posts/show', {post: post, csrfToken: res.locals.csrf});
    });
  },

  edit(req, res) {
    postModel.find({id: req.params.id}).then((post) => {
      res.render('posts/edit', {post: post, csrfToken: res.locals.csrf});
    });
  },

  update(req, res) {
    let params = {};
    params.title = req.body.title;
    params.body = req.body.body;

    postModel.update(req.params.id, params).then((post) => {
      res.redirect(`/posts/${post.id}`);
    });
  },

  destroy(req, res) {
    postModel.destroy(req.params.id, () => {
      res.redirect('/posts');
    });
  }
}
