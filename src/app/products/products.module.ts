import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';
import { FormsModule } from '@angular/forms';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFeedbackComponent,
    ProductCartComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  exports: [ProductComponent, ProductListComponent],
})
export class ProductsModule {}
