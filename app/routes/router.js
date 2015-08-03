import posts from './posts';
import comments from './comments';

export default {
  initialize: function(app) {

    app.get('/', (req, res) => {
      res.redirect('/posts');
    });

    app.use('/posts', posts);
    app.use('/posts', comments);
  }
}
