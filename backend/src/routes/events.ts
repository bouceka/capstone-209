import { MOCK_EVENTS } from '../data/event-mock-data';
import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

router.get('/events', (req: Request, res: Response) => {
  res.send(MOCK_EVENTS);
});

export { router as eventRouter };
