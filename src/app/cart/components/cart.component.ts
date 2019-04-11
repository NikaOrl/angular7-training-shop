import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { Product } from '../../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartProducts();
  }

  private getCartProducts(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }
}
