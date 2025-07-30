import express from 'express';
import { createUserController } from '../controllers/user.controller';
import { getUserController } from '../controllers/user.controller';

const router = express.Router();

// Todo - Routes need to be change
router.post('/user-input', createUserController);

router.get('/get-User', getUserController);

export default router;
