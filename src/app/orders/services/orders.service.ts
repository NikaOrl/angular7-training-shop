import { Injectable } from '@angular/core';

import { Order, OrderProcess } from '../models/order.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: Order[] = [];
  constructor(private cartService: CartService) {}

  onOrder(orderData: OrderProcess): void {
    const basket = this.cartService.getCartProducts();
    const currentDate = new Date();
    if (basket.length > 0) {
      this.orders.push({
        id: this.orders.length,
        clientName: orderData.clientName,
        email: orderData.email,
        phoneNumbers:
          orderData.phoneNumbers.length > 0 ? orderData.phoneNumbers : null,
        address: orderData.address,
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
