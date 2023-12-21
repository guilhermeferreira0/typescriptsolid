import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/message';
import { Persistancy } from '../services/persistance';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistancy: Persistancy,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistancy.saveOrder();
    this.cart.clear();
  }
}
