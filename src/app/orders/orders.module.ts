import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrdersRoutingModule],
  exports: [OrderComponent],
})
export class OrdersModule {}
