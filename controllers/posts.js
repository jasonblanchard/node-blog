import posts from '../post-fixtures';

export default {

  get: function(req, res) {
    res.render('posts/index', {posts: posts});
  },

  edit: function(req, res) {
    let post = posts.find((post) => {
      return post.id === parseInt(req.params.id);
    });
    res.render('posts/edit', {post: post});
  },

  update: function(req, res) {
    let post = posts.find((post) => {
      return post.id === parseInt(req.params.id);
    });

    post.title = req.body.title
    post.body = req.body.body;

    res.redirect('/posts');
  }
}
