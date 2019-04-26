import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Promise<Product>;

  constructor(
    private productsService: ProductsService,
    private cart: CartService,
  ) {}

  ngOnInit() {
    this.getProducts();
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }

  getProducts(): Promise<Product> {
    return this.products;
  }

  onBuy(item: Product): void {
    console.log(`The ${item.name} was bought`);
    this.cart.onBuy(item);
  }
}
