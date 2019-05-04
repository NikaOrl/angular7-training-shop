import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  products: Promise<Product>;
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  getProducts(): Promise<Product> {
    return this.products;
  }

  editProduct(product: Product) {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }
}
