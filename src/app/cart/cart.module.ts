import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FormsModule, ProductsModule, SharedModule],
  exports: [CartComponent],
})
export class CartModule {}
