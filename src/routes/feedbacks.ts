import express from 'express';
import FeedbacksController from '../controllers/feedbacksControllers';
const router = express.Router();

router.get('/', new FeedbacksController().get)
router.post('/', new FeedbacksController().post)
router.put('/', new FeedbacksController().put)
router.delete('/', new FeedbacksController().delete)

export default router;