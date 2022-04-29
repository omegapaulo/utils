import ApiError from './ApiError.js';

const apiErrHandler = (err, req, res, next) => {
  // In prod env, we want to send the error to the client
  // In dev env, we want to log the error to the console
  // In prod env don't use console.log or console.error because
  // It is not async, use winston logger or morgan logger
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
    return;
  }
  res.status(500).json({
    message: 'Something went wrong',
  });
};

export default apiErrHandler;
