import { ProductComponentCategory } from '../components/product/product.component';

export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
}

export class Product implements ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
}
