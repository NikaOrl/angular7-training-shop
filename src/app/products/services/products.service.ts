import { Injectable } from '@angular/core';

import { ProductComponentCategory } from '../components/product/product.component';
import { Product } from 'src/app/shared/product.model';

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
      isAvailable: false
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
