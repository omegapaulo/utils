import express from 'express';
import router from './routes/router.js';
import apiErrHandler from './error/api-err-handler.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.use(apiErrHandler);
app.listen(5000);
