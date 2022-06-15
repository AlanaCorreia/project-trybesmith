import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const validationName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) return res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  
  if (typeof name !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }
  
  if (name.length <= 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

export const validationAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) return res.status(StatusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  
  if (typeof amount !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" must be a string' });
  }
 
  if (amount.length <= 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
};

export const validationUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  
  if (typeof username !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" must be a string' });
  }
 
  if (username.length <= 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
};

export const validationClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"classe" is required' });
  }
  
  if (typeof classe !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" must be a string' });
  }
 
  if (classe.length <= 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
};

export const validationLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"level" is required' });
  }
  
  if (typeof level !== 'number') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be a number' });
  }
 
  if (level <= 0) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
};

export const validationPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  
  if (typeof password !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" must be a string' });
  }
 
  if (password.length <= 7) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
};