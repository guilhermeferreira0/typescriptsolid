import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>;
  addItem(product: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
