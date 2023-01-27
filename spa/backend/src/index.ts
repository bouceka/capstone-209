import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import 'express-async-errors';

import { eventRouter } from './routes/events';
import { blogPostsRouter } from './routes/blog-posts';

const app = express();
app.use(json());

app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(eventRouter);
app.use(blogPostsRouter);

const start = async () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();
