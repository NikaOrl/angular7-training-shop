import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductHttpService } from '../services/product-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productHttpService: ProductHttpService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    console.log('UserResolve Guard is called');

    const id = route.paramMap.get('productID');
    const product = this.productHttpService.getProduct(+id);
    const isOld = id !== null && !isNaN(+id) && product !== undefined;
    if (isOld) {
      if (product) {
        return product;
      } else {
        this.router.navigate(['/admin/products']);
        return null;
      }
    } else {
      return of(new Product());
    }
  }
}
