import express, { Router } from 'express';
import register from '../controllers/register';

const router: any = Router();

router.get('/', register.registerPage);

export default router;