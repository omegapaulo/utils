import express from 'express';
import logger from './index.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Hello World' });
});

app.post('/posts', (req, res) => {
  logger(req.body.user).info('User created');
  // console.log(req.body);
  res.status(200).json({ data: 'Hello World' });
});

// logger().log({
//   level: 'warn || info || error',
//   message: 'What time is the testing at?',
// });
logger().info('text info', { meta: 1 });
logger().warn('text warn');
logger().error('text error');
logger().error(new Error('something went wrong'));

app.listen(5000, logger().info('Server started on port 5000'.green));
