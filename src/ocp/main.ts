/*
  Open/closed principle
  Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/

import { Messaging } from './services/message';
import { Order } from './class/order';
import { Persistancy } from './services/persistance';
import { Product } from './class/product';
import { ShoppingCart } from './class/shopping-cart';
import {
  // FiftyPercentDiscount,
  // TenPercentDiscount,
  NoDiscount,
} from './class/discount';

// const fifty = new FiftyPercentDiscount();
// const ten = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shopping = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();

const order = new Order(shopping, messaging, persistancy);

shopping.addItem(new Product('Camiseta', 49.9));
shopping.addItem(new Product('Caderno', 26.95));
shopping.addItem(new Product('borraacha', 32.1));

console.log(shopping.items);
console.log(shopping.total());
console.log(shopping.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
