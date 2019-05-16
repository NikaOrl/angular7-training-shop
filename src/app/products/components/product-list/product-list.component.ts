import { Component, OnInit } from '@angular/core';
// @Ngrx
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/app/products/models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { AppState } from 'src/app/core/+store/app.state';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import { ProductsState } from 'src/app/core/+store/products/products.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsState$: Observable<ProductsState>;

  constructor(private store: Store<AppState>, private cart: CartService) {}

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onBuy(item: Product): void {
    console.log(`The ${item.name} was bought`);
    this.cart.onBuy(item);
  }
}
