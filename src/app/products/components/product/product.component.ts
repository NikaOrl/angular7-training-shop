import { Component, Input } from '@angular/core';

export enum ProductComponentCategory {
  Fruits = 'Fruits',
  BakeryProducts = 'Bakery products'
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: ProductComponentCategory;
  @Input() isAvailable: boolean;
}
