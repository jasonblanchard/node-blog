import postFixtures from './post_fixtures';
import bookshelf from '../config/bookshelf';

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true
});

export default {
  find(options, cb) {
    if (Object.keys(options).length === 0) {
      Post.fetchAll().then((posts) => {
        let serialized = posts.map((post) => {
          return post.toJSON();
        });
        cb(serialized);
      });
      return
    }

    if (options.id != undefined) {
      Post.where({id: options.id}).fetch().then((post) => {
        cb(post.toJSON());
      });

      return
    }
  },

  update(id, params, cb) {
    Post.where({id: id}).fetch().then((post) => {
      post.save(params).then((post) => {
        cb(post.toJSON());
      });
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
