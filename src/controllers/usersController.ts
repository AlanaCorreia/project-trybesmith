import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/usersService';

export default class UsersController {
  constructor(private service = new UsersService()) { }

  create = async (req: Request, res: Response) => {
    const newUser = await this.service.create(req.body);

    return res.status(StatusCodes.CREATED).json({ token: newUser });
  };
}