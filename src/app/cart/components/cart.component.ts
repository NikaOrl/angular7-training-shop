import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { BasketProduct } from 'src/app/shared/basketProduct.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: BasketProduct[];
  fields: string[] = ['name', 'price', 'number'];
  field = 'name';
  order = true;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartProducts();
  }

  getSumPrice(): number {
    return this.cartService.getSumPrice();
  }

  getProductsNumber(): number {
    return this.cartService.getProductsNumber();
  }

  onProductRemove(basketProduct: BasketProduct): void {
    this.cartService.onProductRemove(basketProduct);
  }

  onProductAdding(basketProduct: BasketProduct): void {
    this.cartService.onProductAdding(basketProduct);
  }

  onProductReducing(basketProduct: BasketProduct): void {
    this.cartService.onProductReducing(basketProduct);
  }

  onCartClean(): void {
    this.cartService.onCartClean();
    this.cartProducts = this.cartService.getCartProducts();
  }

  private getCartProducts(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }
}
