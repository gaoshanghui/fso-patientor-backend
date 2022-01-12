// Router: handle a set of specific resources (endpoints)

import express from 'express';
import { getEntries } from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = getEntries();
  res.json(entries);
});

export default router;
