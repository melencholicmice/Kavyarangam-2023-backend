import { Router } from 'express';
import { register } from '../controllers/userControllers';

const router = Router();

router.route('/register').post(register);

export default router;
