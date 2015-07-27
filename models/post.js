import postFixtures from './post_fixtures';

export default {
  find(options, cb) {
    if (Object.keys(options).length === 0) {
      cb(postFixtures);
      return
    }

    if (options.id != undefined) {
      let post = postFixtures.find((post) => {
        return post.id === parseInt(options.id);
      });

      cb(post);

      return
    }
  },

  create(post_params, cb) {
    let post = {}
    let id = postFixtures.length + 1;
    post.id = id;
    post.title = post_params.title;
    post.body = post_params.body;

    postFixtures.push(post);

    cb(post);
  },

  destroy(id, cb) {
    postFixtures.forEach((post, index) => {
      if (post.id === parseInt(id)) {
        delete postFixtures[index];
      }
    });
    
    cb();
  }
}
