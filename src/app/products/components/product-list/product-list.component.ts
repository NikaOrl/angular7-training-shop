import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productHttpService: ProductHttpService,
    private cart: CartService,
  ) {}

  ngOnInit() {
    this.products = this.productHttpService.getProducts();
  }

  onBuy(item: Product): void {
    console.log(`The ${item.name} was bought`);
    this.cart.onBuy(item);
  }
}
