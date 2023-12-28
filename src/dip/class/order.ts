import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistancyProtocol } from './interfaces/persistancy-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistancy: PersistancyProtocol,
    private readonly customer: CustomerOrder,
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

    console.log(`O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}
    `);
  }
}
