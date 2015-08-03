import express from 'express';
import comments from '../controllers/comments';

var router = express.Router();

router.post('/:post_id/comments/', comments.create);
router.delete('/:post_id/comments/:id', comments.destroy);

export default router;
