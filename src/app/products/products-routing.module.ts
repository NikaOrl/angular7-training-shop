import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductCartComponent,
  },
  {
    path: 'feedback',
    component: ProductFeedbackComponent,
    outlet: 'feedback',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
