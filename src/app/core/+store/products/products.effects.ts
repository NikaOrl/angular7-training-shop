import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
// rxjs
import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap } from 'rxjs/operators';

import { ProductHttpService } from 'src/app/products/services/product-http.service';
import * as ProductsActions from './products.actions';
import { Product } from 'src/app/products/models/product.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private productHttpService: ProductHttpService,
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(
      ProductsActions.ProductsActionTypes.GET_PRODUCTS,
    ),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productHttpService
        .getProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products))
        .catch(err => new ProductsActions.GetProductsError(err)),
    ),
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT,
    ),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productHttpService
        .updateProduct(payload)
        .then(task => {
          this.router.navigate(['/admin/products']);
          return new ProductsActions.UpdateProductSuccess(task);
        })
        .catch(err => new ProductsActions.UpdateProductError(err)),
    ),
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT,
    ),
    pluck('payload'),
    concatMap((payload: Product) =>
      this.productHttpService
        .createProduct(payload)
        .then(task => {
          this.router.navigate(['/admin/products']);
          return new ProductsActions.CreateProductSuccess(task);
        })
        .catch(err => new ProductsActions.CreateProductError(err)),
    ),
  );
}
