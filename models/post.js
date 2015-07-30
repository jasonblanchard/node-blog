import postFixtures from './post_fixtures';
import bookshelf from '../config/bookshelf';

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true
});

export default {
  find(options) {
    if (Object.keys(options).length === 0) {

      return Post.fetchAll()
      .then((posts) => {
        return Promise.resolve(
          posts.map((post) => { return post.toJSON() })
        );
      });

    }

    if (options.id != undefined) {

      return new Promise((resolve, reject) => {
        Post.where({id: options.id}).fetch().then((post) => {
          resolve(post.toJSON());
        });
      });
    }
  },

  update(id, params, cb) {

    return Post.where({id: id}).fetch()
    .then((post) => {
      return post.save(params);
    })
    .then((post) => {
      return Promise.resolve(post.toJSON());
    });

  },

  create(post_params, cb) {
    let post = {}
    let id = postFixtures.length + 1;
    post.title = post_params.title;
    post.body = post_params.body;

    new Post(post).save().then((newPost) => {
      cb(newPost);
    });
  },

  destroy(id, cb) {
    Post.where({id: id}).fetch().then((post) => {
      post.destroy();
      cb();
    });
  
  }
}
