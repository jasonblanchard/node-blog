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

  update(id, params) {

    return Post.where({id: id}).fetch()
    .then((post) => {
      return post.save(params);
    })
    .then((post) => {
      return Promise.resolve(post.toJSON());
    });

  },

  create(post_params) {
    let post = {}
    post.title = post_params.title;
    post.body = post_params.body;

    return new Post(post).save().then((newPost) => {
      return Promise.resolve(newPost.toJSON());
    });
  },

  destroy(id, cb) {
    return Post.where({id: id}).fetch()
    .then((post) => {
      return post.destroy();
    });
  
  }
}
