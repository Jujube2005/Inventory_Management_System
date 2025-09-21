import { Product } from './product';
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
}
