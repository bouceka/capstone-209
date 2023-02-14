import { POSTS_DATA } from "../data/posts-mock-data";
import { Request, Response } from 'express';


const express = require('express');
const router = express.Router();

router.get('/posts', (req: Request, res: Response) => {
  res.send(POSTS_DATA);
});


export { router as blogPostsRouter };