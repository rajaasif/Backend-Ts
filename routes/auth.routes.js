import { Router } from 'express';
import { signUp,signIn,signOut } from '../controllers/auth.controller.js';
const authRouter = Router();

authRouter.post('/sign-up', signUp);// /api/v1/auth/sign-up
authRouter.post('/sign-in', signIn);// /api/v1/auth/sign-in
authRouter.post('/sign-out',signOut);// /api/v1/auth/sign-out

export default authRouter;