import connection from '../models/connection';
import Product from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }
  
  public async create(product: Product): Promise<Product> {
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}