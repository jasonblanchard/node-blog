import posts from './routes/posts';

export default {
  initialize: function(app) {
    app.use('/posts', posts);
  }
}
