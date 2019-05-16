import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss'],
})
export class AdminProductFormComponent implements OnInit {
  product: Product;
  id: number | string;
  isOld: boolean;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productID');
    this.isOld =
      this.id !== null &&
      !isNaN(+this.id) &&
      this.productsService.getProduct(+this.id) !== undefined;
    this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
    });
  }

  onSaveProduct(): void {
    const product = { ...this.product };
    if (this.isOld) {
      this.productsService.updateProduct(product);
    } else {
      this.productsService.createProduct(product);
    }
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
