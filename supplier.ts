export class Supplier {
  public idsupplier: number;
  public name: string;
  public address: string;
  public phone: string;
  public contactPerson: string;

  constructor(idsupplier: number, name: string, address: string, phone: string, contactPerson: string) {
    this.idsupplier = idsupplier;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.contactPerson = contactPerson;
  }
}
