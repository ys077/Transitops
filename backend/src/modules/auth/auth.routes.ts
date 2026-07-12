import { Router } from 'express';
import { register, login, getMe } from './auth.controller.js';
import { verifyToken } from '../../middleware/auth.js';

export const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/me', verifyToken, getMe);
