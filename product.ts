import { Category } from "./category";

export class Product {
    public idproduct: number;
    public name: string;
    public description: string;
    public price: number;
    public category: Category;

    constructor(idproduct: number, name: string, description: string, price: number, category: Category){
        this.idproduct = idproduct;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category
    }
}