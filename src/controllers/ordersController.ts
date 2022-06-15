import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  constructor(private service = new OrdersService()) { }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();

    return res.status(StatusCodes.OK).json(orders);
  };
}