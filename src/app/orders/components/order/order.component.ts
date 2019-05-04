import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public name: string;
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {}

  onOrder() {
    if (this.name && this.name !== '') {
      this.ordersService.onOrder(this.name);
    } else {
      alert('Enter your name!');
    }
  }
}
