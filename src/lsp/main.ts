/*
  Liskov substitution principle (Princípio da substituição de Liskov) - Se o(x) é uma propriedade demonstrável dos objstos x de tipo T. Então o(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. 

  Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
  
  Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
