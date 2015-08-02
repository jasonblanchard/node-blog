import posts from './posts';

export default {
  initialize: function(app) {

    app.get('/', (req, res) => {
      res.redirect('/posts');
    });

    app.use('/posts', posts);
  }
}
