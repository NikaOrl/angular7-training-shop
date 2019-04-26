import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStylizationDirective } from './directives/product-stylization.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [ProductStylizationDirective, ClickDirective, OrderByPipe],
  imports: [CommonModule],
  exports: [ProductStylizationDirective, ClickDirective, OrderByPipe],
})
export class SharedModule {}
