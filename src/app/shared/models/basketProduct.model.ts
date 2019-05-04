import { Product } from '../../products/models/product.model';

export interface BasketProductInterface {
  product: Product;
  number: number;
}

export class BasketProduct implements BasketProductInterface {
  product: Product;
  number: number;
}
