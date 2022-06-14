import connection from '../models/connection';
import Product from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = this.model.getAll();

    return products;
  }
}