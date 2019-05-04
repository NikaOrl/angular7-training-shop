import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminProductFormComponent,
  ],
  imports: [CommonModule, ProductsModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
