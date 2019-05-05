import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

import { Product } from 'src/app/products/models/product.model';
import { ProductHttpService } from 'src/app/products/services/product-http.service';

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
    private productHttpService: ProductHttpService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productID');
    this.isOld =
      this.id !== null &&
      !isNaN(+this.id) &&
      this.productHttpService.getProduct(+this.id) !== undefined;
    this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
    });
  }

  onSaveProduct(): void {
    const product = { ...this.product };
    if (this.isOld) {
      this.productHttpService
        .updateProduct(product)
        .then(() => this.onGoBack());
    } else {
      this.productHttpService
        .createProduct(product)
        .then(() => this.onGoBack());
    }
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
