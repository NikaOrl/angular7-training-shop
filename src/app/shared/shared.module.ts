import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStylizationDirective } from './directives/product-stylization.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const elems = [ProductStylizationDirective, ClickDirective, OrderByPipe];

@NgModule({
  declarations: [...elems],
  imports: [CommonModule],
  exports: [...elems]
})
export class SharedModule {}
