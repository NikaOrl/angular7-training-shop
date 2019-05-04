import { Injectable } from '@angular/core';

import { ProductComponentCategory } from '../components/product/product.component';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 0,
      name: 'apple',
      description: 'apple',
      price: 10,
      category: ProductComponentCategory.Fruits,
      isAvailable: true,
    },
    {
      id: 1,
      name: 'watermelon',
      description: 'watermelon',
      price: 20,
      category: ProductComponentCategory.Fruits,
      isAvailable: true,
    },
    {
      id: 2,
      name: 'bread',
      description: 'bread',
      price: 15,
      category: ProductComponentCategory.BakeryProducts,
      isAvailable: false,
    },
  ];

  getProducts(): Promise<Product> {
    return <Promise<Product>>new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 200);
    }).catch(error => error);
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  updateProduct(product: Product) {
    const i = this.products.findIndex(t => t.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1, product);
    }
  }

  createProduct(product: Product) {
    this.products.push(product);
  }
}
