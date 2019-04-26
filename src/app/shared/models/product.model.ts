import { ProductComponentCategory } from '../../products/components/product/product.component';

export interface ProductInterface {
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
  Calories?: boolean;
}

export class Product implements ProductInterface {
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
  Calories?: boolean;
}
