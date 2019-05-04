import { BasketProduct } from 'src/app/shared/models/basketProduct.model';

export interface OrderInterface {
  id: number;
  clientName: string;
  products: BasketProduct[];
  sumPrice: number;
  date: string;
}

export class Order implements OrderInterface {
  id: number;
  clientName: string;
  products: BasketProduct[];
  sumPrice: number;
  date: string;
}
