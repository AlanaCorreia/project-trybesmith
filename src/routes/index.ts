import { Router } from 'express';
import ordersRouter from './orders/ordersRouter';
import productsRouter from './products/productsRouter';
import usersRouter from './users/usersRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);

export default router;