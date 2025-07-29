import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/user.middleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route', user: (req as any).user });
});

export default router;
