import express from 'express';
import posts from '../controllers/posts';

var router = express.Router();

router.get('/', posts.index);
router.get('/new', posts.new);
router.post('/', posts.create);
router.get('/:id', posts.show);
router.get('/:id/edit', posts.edit);
router.put('/:id', posts.update);
router.delete('/:id', posts.destroy);

export default router;
