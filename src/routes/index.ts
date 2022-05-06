import express from 'express';
const router = express.Router();

import feedbackRouter from './feedbacks';

router.get('/', (req,res) => {
  res.send('Healthy')
});

router.use('/feedbacks',feedbackRouter)

export default router