// src/routes/auth.routes.js
import { Router } from 'express';
import { registerUser, loginUser } from '../modules/Auth/auth.controller.js';

const router = Router();

router.post('/register', registerUser); // /api/auth/register
router.post('/login', loginUser);       // /api/auth/login

export default router;
