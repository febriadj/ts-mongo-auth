import express, { Router } from 'express';
import passport from 'passport';

import { registerPage, registerPost } from '../controllers/register';
import { loginPage, loginPost } from '../controllers/login';

const router:any = Router();

// rute register
router.get('/register', registerPage);
router.post('/register', registerPost);

// rute login
router.get('/login', loginPage);
router.post('/login', passport.authenticate('local'), loginPost);

export default router;