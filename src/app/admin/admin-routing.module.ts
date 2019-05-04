import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { ProductResolveGuard } from '../products/guards/product-resolve.guard';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        component: AdminProductsComponent,
      },
      {
        path: 'product/add',
        component: AdminProductFormComponent,
      },
      {
        path: 'product/edit/:productID',
        component: AdminProductFormComponent,
        resolve: {
          product: ProductResolveGuard,
        },
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
