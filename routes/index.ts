import express, { Router } from 'express';
import passport from 'passport';

import { registerPage } from '../controllers/register';
import { loginPost } from '../controllers/login';

const router:any = Router();

router.get('/', registerPage);
router.post('/', passport.authenticate('local'), loginPost);

export default router;