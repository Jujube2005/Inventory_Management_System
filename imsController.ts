import { Product } from './product';
import { Supplier } from './supplier';
import { PO } from './po';
import { Customer } from './customer';
import { Order } from './order';

export class IMSController {
    public static createProduct(name: string, description: string, price: number, categoryId: number) {
        const category = new Category(categoryId, 'Category1', 'Description of category');
        const product = new Product(Math.random(), name, description, price, category);
        console.log('Created Product:', product);
        return product;
    }

    public static createOrder(customerId: number, status: string, productIds: number[]) {
        const customer = new Customer(customerId, 'Customer Name', 'customer@example.com', '1234567890');
        const order = new Order(Math.random(), status, productIds, customer);
        console.log('Creatad Order: ', order);
        return order;
    }

        public static createPO(supplierId: number, productId: number, quantity: number) {
        const supplier = new Supplier(supplierId, 'Supplier Name', '123 Supplier St.', '0987654321', 'Supplier Contact');
        const po = new PO(Math.random(), new Date(), supplier);
        console.log('Created Purchase Order:', po);
        return po;
    }
}

