import { Router } from 'express';
import productsRouter from './products/productsRouter';
import usersRouter from './users/usersRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);

export default router;