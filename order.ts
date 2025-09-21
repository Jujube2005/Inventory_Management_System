import { Customer } from './customer';

export class Order {
  public idorder: number;
  public orderDate: Date;
  public status: string;
  public customer: Customer;

  constructor(idorder: number, orderDate: Date, status: string, customer: Customer) {
    this.idorder = idorder;
    this.orderDate = orderDate;
    this.status = status;
    this.customer = customer;
  }
}
