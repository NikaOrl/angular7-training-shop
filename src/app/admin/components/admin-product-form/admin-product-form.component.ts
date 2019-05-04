import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss'],
})
export class AdminProductFormComponent implements OnInit {
  product: Product;
  id: number;
  isOld: boolean;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('productID');
    this.isOld =
      !isNaN(this.id) && this.productsService.getProduct(this.id) !== undefined;
    this.product = this.isOld
      ? this.productsService.getProduct(this.id)
      : new Product();
  }

  onSaveProduct() {
    const product = { ...this.product };
    if (this.isOld) {
      this.productsService.updateProduct(product);
    } else {
      this.productsService.createProduct(product);
    }
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
