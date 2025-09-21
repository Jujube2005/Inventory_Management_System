import { Product } from './product';
import { Order } from './order';

export class OrderItem {
  public idorderItem: number;
  public product: Product;
  public quantity: number;
  public unitPrice: number;
  public order: Order;

  constructor(idorderItem: number, product: Product, quantity: number, unitPrice: number, order: Order) {
    this.idorderItem = idorderItem;
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.order = order;
  }
}
