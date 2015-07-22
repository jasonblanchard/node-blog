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
  }
}
