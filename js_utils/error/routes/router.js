import express from 'express';
import tweetController from '../controllers/tweet.js';

const router = express();
router.post('/tweet', tweetController.tweet);

export default router;
