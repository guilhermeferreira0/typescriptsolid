/*
  Interface segregation principle (Principio da segregação de Interface) - os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam;
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
import {
  EnterpriseCustomer,
  // IndividualCustomer
} from './class/customer';

// const fifty = new FiftyPercentDiscount();
// const ten = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shopping = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();
// const individualCustomer = new IndividualCustomer('Julio', 'Silva', '123456');
const enterpriseCustomer = new EnterpriseCustomer('Levolvo', '123546+89');

const order = new Order(shopping, messaging, persistancy, enterpriseCustomer);

shopping.addItem(new Product('Camiseta', 49.9));
shopping.addItem(new Product('Caderno', 26.95));
shopping.addItem(new Product('borraacha', 32.1));

console.log(shopping.items);
console.log(shopping.total());
console.log(shopping.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
