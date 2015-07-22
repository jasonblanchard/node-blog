import express from 'express';
import posts from '../controllers/posts';

var router = express.Router();

router.get('/', posts.index);
router.get('/:id', posts.show);
router.get('/:id/edit', posts.edit);
router.put('/:id', posts.update);

export default router;
