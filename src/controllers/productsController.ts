import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/productsService';

export default class ProductsController {
  constructor(private service = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    
    return res.status(StatusCodes.OK).json(products);
  };
}