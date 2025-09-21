export class Customer {
  public idcustomer: number;
  public name: string;
  public email: string;
  public phone: string;

  constructor(idcustomer: number, name: string, email: string, phone: string) {
    this.idcustomer = idcustomer;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
