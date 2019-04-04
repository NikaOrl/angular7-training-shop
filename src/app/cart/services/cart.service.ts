import { Injectable, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  basket: Product[] = [];

  ngOnInit() {
    this.basket = [];
  }

  onBuy(product: Product): void {
    this.basket.push(product);
  }

  getCartProducts(): Product[] {
    return this.basket;
  }

  getSumPrice() {
    return this.basket.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
  }
}
