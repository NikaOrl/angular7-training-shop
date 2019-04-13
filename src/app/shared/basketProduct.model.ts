import { Product } from './product.model';

export interface BasketProductInterface {
  product: Product;
  number: number;
}

export class BasketProduct implements BasketProductInterface {
  product: Product;
  number: number;
}
