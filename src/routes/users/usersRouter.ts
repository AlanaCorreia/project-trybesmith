import { Router } from 'express';
import UsersController from '../../controllers/usersController';
import { validationUsername, validationClasse, validationLevel,
  validationPassword } from '../../middlewares/validationMiddleware';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/', 
  validationUsername, 
  validationClasse, 
  validationLevel, 
  validationPassword,
  usersController.create,
);

export default usersRouter;
