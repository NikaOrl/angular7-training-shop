import { Injectable } from '@angular/core';

import { Order } from '../models/order.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: Order[] = [];
  constructor(private cartService: CartService) {}

  onOrder(name: string): void {
    const basket = this.cartService.getCartProducts();
    const currentDate = new Date();
    if (basket.length > 0) {
      this.orders.push({
        id: this.orders.length,
        clientName: name,
        products: basket,
        sumPrice: this.cartService.getSumPrice(),
        date: `${currentDate.toLocaleString()}`,
      });
      this.cartService.onCartClean();
    } else {
      alert('Your cart is empty!');
    }
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
