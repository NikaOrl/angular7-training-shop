import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/products/models/product.model';
import { ProductHttpService } from 'src/app/products/services/product-http.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    private productHttpService: ProductHttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.products = this.productHttpService.getProducts();
  }

  getProducts(): Promise<Product[]> {
    return this.products;
  }

  editProduct(product: Product): void {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }

  addProduct(): void {
    const link = 'admin/product/add';
    this.router.navigateByUrl(link);
  }
}
