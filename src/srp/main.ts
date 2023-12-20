import { Messaging } from './services/message';
import { Order } from './entities/order';
import { Persistancy } from './services/persistance';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shopping = new ShoppingCart();
const messaging = new Messaging();
const persistancy = new Persistancy();

const order = new Order(shopping, messaging, persistancy);

shopping.addItem(new Product('Camiseta', 49.9));
shopping.addItem(new Product('Caderno', 26.95));
shopping.addItem(new Product('borraacha', 32.1));

console.log(shopping.items);
console.log(shopping.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
