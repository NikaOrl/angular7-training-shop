import { Injectable, OnInit } from '@angular/core';

import { Product } from '../../products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  basket: Product[] = [];

  ngOnInit() {
    this.basket = [];
  }

  onBuy(product): void {
    this.basket.push(product);
  }

  getCartProducts() {
    return this.basket;
  }
}
