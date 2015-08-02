import postService from '../services/post_service';

export default {

  index(req, res) {
    postService.find({}).then((posts) => {
      res.render('posts/index', {posts: posts});
    });
  },

  new(req, res) {
    res.render('posts/new', {csrfToken: res.locals.csrf});
  },

  create(req, res) {
    postService.create(req.body).then((post) => {
      res.redirect(`posts/${post.id}`);
    });
  },

  show(req, res) {
    postService.find({id: req.params.id}).then((post) => {
      res.render('posts/show', {post: post, csrfToken: res.locals.csrf});
    });
  },

  edit(req, res) {
    postService.find({id: req.params.id}).then((post) => {
      res.render('posts/edit', {post: post, csrfToken: res.locals.csrf});
    });
  },

  update(req, res) {
    let params = {};
    params.title = req.body.title;
    params.body = req.body.body;

    postService.update(req.params.id, params).then((post) => {
      res.redirect(`/posts/${post.id}`);
    });
  },

  destroy(req, res) {
    postService.destroy(req.params.id).then(() => {
      res.redirect('/posts');
    });
  }
}
