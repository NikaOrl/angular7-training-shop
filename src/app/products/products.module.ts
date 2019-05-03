import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductComponent, ProductListComponent],
})
export class ProductsModule {}
