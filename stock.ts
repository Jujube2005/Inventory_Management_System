import { Product } from './product';

export class Stock {
    public idstock: number;
    public quantity: number;
    public location: string;
    public product: Product;

    constructor(idstock: number, quantity: number, location: string, product: Product) {
    this.idstock = idstock;
    this.quantity = quantity;
    this.location = location;
    this.product = product;
  }

  public updateStock(newQuantity: number): void {
    this.quantity = newQuantity;
  }
}

}
