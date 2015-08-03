import Comment from '../models/comment.js';

export default {
  create(req, res) {
    let commentParams = {};
    commentParams.body = req.body.body;
    commentParams.post_id = req.params.post_id;

    new Comment(commentParams).save().then(() => {
      res.redirect(`/posts/${commentParams.post_id}`);
    });
  },

  destroy(req, res) {
    let postId = req.params.post_id;

    new Comment({id: req.params.id}).fetch()
    .then((comment) => {
      comment.destroy()})
      .then(() => {
        res.redirect(`/posts/${postId}`);
      });
  }
}
