import { Router } from 'express';
import ProductsController from '../../controllers/productsController';
import { validationAmount, validationName } from '../../middlewares/validationMiddleware';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get('/', productsController.getAll);
productsRouter.post('/', validationName, validationAmount, productsController.create);

export default productsRouter;