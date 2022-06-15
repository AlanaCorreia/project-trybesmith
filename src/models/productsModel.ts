import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute('SELECT * FROM  Trybesmith.Products;');

    return products as Product[];
  }
  
  public async getByOrderId(id: number): Promise<Product[]> {
    const [products] = await this.connection.execute(
      'SELECT * FROM  Trybesmith.Products WHERE orderId = ?;',
      [id],
    );

    return products as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [data] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`, [name, amount]);

    const newProduct = {
      id: data.insertId,
      name, 
      amount,
    };

    return newProduct;
  }
}