import { Product } from '../models/product';
import { Supplier } from '../models/supplier';
import { POItem } from '../models/poItem';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';
import { Stock } from '../models/stock';
import { Category } from '../models/category';
import { PO } from '../models/po';

export class IMSController {
    public static createProduct(name: string, description: string, price: number, categoryId: number) {
        const category = new Category(categoryId, 'Category1', 'Description of category');
        const product = new Product(Math.random(), name, description, price, category);
        console.log('Created Product:', product);
        return product;
    }

    public static createOrder(customerId: number, status: string, productIds: number[]) {
        const customer = new Customer(customerId, 'Customer Name', 'customer@example.com', '1234567890');
        const order = new Order(Math.random(), new Date(), status, customer);
        console.log('Creatad Order: ', order);
        return order;
    }

    public static createPO(supplierId: number, productId: number, quantity: number) {
        const supplier = new Supplier(supplierId, 'Supplier Name', '123 Supplier St.', '0987654321', 'Supplier Contact');
        const po = new PO(Math.random(), new Date(), supplier);
        console.log('Created Purchase Order:', po);
        return po;
    }

    public static createStock(productId: number, quantity: number, location: string) {
        const product = new Product(productId, 'Product Name', 'Product Description', 100, new Category(1, 'Category1', 'Description of category'));
        const stock = new Stock(Math.random(), quantity, location, product);
        console.log('Created Stock:', stock);
        return stock;
    }

    public static createPOItem(productId: number, quantity: number, costPrice: number, poId: number) {
        const product = new Product(productId, 'Product Name', 'Product Description', 100, new Category(1, 'Category1', 'Description of category'));
        const po = new PO(poId, new Date(), new Supplier(1, 'Supplier Name', '123 Supplier St.', '0987654321', 'Supplier Contact'));
        const poItem = new POItem(Math.random(), product, quantity, costPrice, po);
        console.log('Created POItem:', poItem);
        return poItem;
    }

    static createOrderItem(productId: number, quantity: number, unitPrice: number, orderId: number) {
        const product = new Product(productId, 'Product Name', 'Product Description', 100, new Category(1, 'Category1', 'Description of category'));
        const order = new Order(orderId, new Date(), 'Pending', new Customer(1, 'Customer Name', 'customer@example.com', '1234567890'));
        const orderItem = new OrderItem(Math.random(), product, quantity, unitPrice, order);
        console.log('Created OrderItem:', orderItem);
        return orderItem;
    }
}



