import { BasketProduct } from 'src/app/shared/models/basketProduct.model';

export interface OrderInterface {
  id: number;
  clientName: string;
  email: string;
  phoneNumbers?: string[];
  address?: string;
  products: BasketProduct[];
  sumPrice: number;
  date: string;
}

export class Order implements OrderInterface {
  id: number;
  clientName: string;
  email: string;
  phoneNumbers?: string[];
  address?: string;
  products: BasketProduct[];
  sumPrice: number;
  date: string;
}

export interface OrderProcessInterface {
  clientName: string;
  email: string;
  phoneNumbers?: string[];
  address?: string;
}

export class OrderProcess implements OrderProcessInterface {
  clientName: string;
  email: string;
  phoneNumbers?: string[];
  address?: string;
}
