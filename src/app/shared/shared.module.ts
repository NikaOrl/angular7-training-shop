import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStylizationDirective } from './product-stylization.directive';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [ProductStylizationDirective, ClickDirective],
  imports: [CommonModule],
  exports: [ProductStylizationDirective, ClickDirective],
})
export class SharedModule {}
