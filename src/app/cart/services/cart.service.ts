import { Injectable, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { BasketProduct } from 'src/app/shared/models/basketProduct.model';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  basket: BasketProduct[] = [];
  sumPrice: number;
  productsNumber: number;

  ngOnInit() {
    this.basket = [];
  }

  onBuy(product: Product): void {
    const productIndex = this.basket.findIndex(
      item => item.product.name === product.name,
    );
    if (productIndex !== -1) {
      this.basket[productIndex].number++;
    } else {
      this.basket.push({ number: 1, product: product });
    }
  }

  onProductRemove(basketProduct: BasketProduct): void {
    const productIndex = this.basket.findIndex(
      item => item.product.name === basketProduct.product.name,
    );
    if (productIndex !== -1) {
      this.basket.splice(productIndex, 1);
    }
  }

  onProductAdding(basketProduct: BasketProduct): void {
    const productIndex = this.basket.findIndex(
      item => item.product.name === basketProduct.product.name,
    );
    if (productIndex !== -1) {
      this.basket[productIndex].number++;
    }
  }

  onProductReducing(basketProduct: BasketProduct): void {
    const productIndex = this.basket.findIndex(
      item => item.product.name === basketProduct.product.name,
    );
    if (productIndex !== -1) {
      if (this.basket[productIndex].number > 1) {
        this.basket[productIndex].number--;
      } else {
        this.onProductRemove(basketProduct);
      }
    }
  }

  onCartClean(): void {
    this.basket = [];
  }

  getCartProducts(): BasketProduct[] {
    return this.basket;
  }

  getSumPrice() {
    this.sumPrice = this.basket.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.product.price * currentValue.number;
    }, 0);
    return this.sumPrice;
  }

  getProductsNumber() {
    this.productsNumber = this.basket.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.number;
    }, 0);
    return this.productsNumber;
  }
}
