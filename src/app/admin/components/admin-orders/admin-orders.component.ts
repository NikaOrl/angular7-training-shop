import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/orders/models/order.model';
import { OrdersService } from 'src/app/orders/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  public orders: Order[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }
}
