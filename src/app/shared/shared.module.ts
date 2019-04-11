import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStylizationDirective } from './product-stylization.directive';

@NgModule({
  declarations: [ProductStylizationDirective],
  imports: [CommonModule],
  exports: [ProductStylizationDirective]
})
export class SharedModule {}
