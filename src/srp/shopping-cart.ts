type CartItem = { name: string; price: number };
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  get items(): CartItem[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(product: CartItem): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}

const p1 = new ShoppingCart();

console.log(p1.orderStatus);
p1.addItem({ name: 'Coca', price: 25 });
p1.addItem({ name: 'Caderno', price: 9.9 });
p1.addItem({ name: 'Caneta', price: 1.59 });
console.log(p1.items);

p1.clear();

p1.items[0] = { name: 'Joao silva', price: 49 };

console.log(p1.items);
console.log(p1.total());
p1.checkout();
console.log(p1.orderStatus);
