import Order from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import ProductsModel from '../models/productsModel';

export default class OrdersService {
  orderModel: OrdersModel;

  productModel: ProductsModel;

  constructor() {
    this.orderModel = new OrdersModel(connection);
    this.productModel = new ProductsModel(connection);
  }

  public async getAll() {
    const orders = await this.orderModel.getAll();
    const ArrayOrdersProducts = await Promise.all(orders.map(async (order: Order) => {
      const productsByOrder = await this.productModel.getByOrderId(order.id);
      const arrayProductsIds = productsByOrder.map(({ id }) => id);

      const result = { id: order.id, userId: order.userId, productsIds: arrayProductsIds };

      return result;
    }));

    return ArrayOrdersProducts;
  }
}