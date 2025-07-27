import express from 'express';
import { handleLoginController, handleRegisterController } from '../controllers/user.controller';
import { handleLoginMiddleware, handleRegisterMiddleware } from '../middlewares/user.middleware';

const router = express.Router();

console.log("2");

router.post('/register', handleRegisterMiddleware, handleRegisterController);

router.get('/login', handleLoginMiddleware, handleLoginController);

export default router;