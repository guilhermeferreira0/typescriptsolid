/*
  Modulos de alto nível não devem depender de módulos de baixo nivel. Ambos devem depender de abstrações.
  Dependa de abstrações, não de implementações.
  Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

  Classes de baixo nível são classes que executam tarefas (os detalhes).
  Classes de alto nível são classes que gerenciam as classes de baixo nível.
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
// import { MessagingProtocol } from './class/interfaces/messaging-protocol';

// const fifty = new FiftyPercentDiscount();
// const ten = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shopping = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();
// const individualCustomer = new IndividualCustomer('Julio', 'Silva', '123456');
const enterpriseCustomer = new EnterpriseCustomer('Levolvo', '123546+89');

// Classe Mock - teste isolado;
// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('A mensagem foi enviada pelo mock');
//   }
// }
// const messagingMock = new MessagingMock();

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
