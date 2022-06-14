import { Router } from 'express';
import productsRouter from './products/productsRouter';

const router = Router();

router.use('/products', productsRouter);

export default router;