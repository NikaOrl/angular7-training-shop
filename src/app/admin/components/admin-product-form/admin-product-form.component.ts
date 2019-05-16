import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Product } from 'src/app/products/models/product.model';
import { AppState } from 'src/app/core/+store/app.state';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  product: Product;
  id: number | string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productID');
    this.store.pipe(select('products')).subscribe(products => {
      this.product = products.data.find(product => product.id === +this.id);
    });
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onSaveProduct(): void {
    if (this.id) {
      this.store.dispatch(new ProductsActions.UpdateProduct(this.product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(this.product));
    }
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
