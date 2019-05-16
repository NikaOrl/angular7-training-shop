import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    console.log('UserResolve Guard is called');

    const id = route.paramMap.get('productID');
    const isOld =
      id !== null &&
      !isNaN(+id) &&
      this.productsService.getProduct(+id) !== undefined;
    if (isOld) {
      const product = this.productsService.getProduct(+id);
      if (product) {
        return of(product);
      } else {
        this.router.navigate(['/admin/products']);
        return null;
      }
    } else {
      return of(new Product());
    }
  }
}
