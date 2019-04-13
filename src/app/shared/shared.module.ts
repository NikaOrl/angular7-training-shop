import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStylizationDirective } from './product-stylization.directive';
import { ClickDirective } from './click.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [ProductStylizationDirective, ClickDirective, OrderByPipe],
  imports: [CommonModule],
  exports: [ProductStylizationDirective, ClickDirective, OrderByPipe],
})
export class SharedModule {}
