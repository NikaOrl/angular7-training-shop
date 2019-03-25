import { Injectable } from '@angular/core';

import { ProductComponentCategory } from '../components/product/product.component';

export interface ProductInterface {
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
}

export class Product implements ProductInterface {
  name: string;
  description: string;
  price: number;
  category: ProductComponentCategory;
  isAvailable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      name: 'apple',
      description: 'apple',
      price: 10,
      category: ProductComponentCategory.Fruits,
      isAvailable: true
    },
    {
      name: 'watermelon',
      description: 'watermelon',
      price: 20,
      category: ProductComponentCategory.Fruits,
      isAvailable: true
    },
    {
      name: 'bread',
      description: 'bread',
      price: 15,
      category: ProductComponentCategory.BakeryProducts,
      isAvailable: true
    }
  ];

  getProducts() {
    return this.products;
  }
}
