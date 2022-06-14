import { Router } from 'express';
import ProductsController from '../../controllers/productsController';
import { validationAmount, validationName } from '../../middlewares/validationMiddleware';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post('/', validationName, validationAmount, productsController.create);

export default router;