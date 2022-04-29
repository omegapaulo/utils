import ApiError from '../error/ApiError.js';

class TweetController {
  tweet(req, res, next) {
    const { tweet } = req.body;

    if (!tweet) {
      next(ApiError.badRequest('Tweet is required'));
      return;
    }

    res.sendStatus(201);
  }
}

export default new TweetController();
