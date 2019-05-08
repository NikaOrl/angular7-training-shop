import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductsAPIProvider } from './product.config';
import { productsReducer } from '../core/+store/products/products.reducer';
import { ProductsEffects } from '../core/+store/products/products.effects';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFeedbackComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [ProductComponent, ProductListComponent],
  providers: [ProductsAPIProvider],
})
export class ProductsModule {}
