import posts from './posts';

export default {
  initialize: function(app) {
    app.use('/posts', posts);
  }
}
