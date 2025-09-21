import { Supplier } from './supplier';

export class PO {
  public idpo: number;
  public poDate: Date;
  public supplier: Supplier;

  constructor(idpo: number, poDate: Date, supplier: Supplier) {
    this.idpo = idpo;
    this.poDate = poDate;
    this.supplier = supplier;
  }
}
