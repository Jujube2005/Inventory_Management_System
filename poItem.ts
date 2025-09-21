import { Product } from './product';
import { PO } from './po';

export class POItem {
  public idpoItem: number;
  public product: Product;
  public quantity: number;
  public costPrice: number;
  public po: PO;

  constructor(idpoItem: number, product: Product, quantity: number, costPrice: number, po: PO) {
    this.idpoItem = idpoItem;
    this.product = product;
    this.quantity = quantity;
    this.costPrice = costPrice;
    this.po = po;
  }
}
