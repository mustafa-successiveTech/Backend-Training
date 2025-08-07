import express from 'express';
import { handleSeedData } from './seed';
import { Results } from './aggregation';
import { checkIndex } from './indexes';

const router = express.Router();

console.log("2");
router.post('/post-seeded-data', handleSeedData, Results);

router.get('/index', checkIndex);

export default router;