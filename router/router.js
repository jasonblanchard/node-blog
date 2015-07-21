import posts from './routes/posts';

export default function(app) {
  app.use('/posts', posts);
}
