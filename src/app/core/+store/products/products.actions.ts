import { Action } from '@ngrx/store';

import { Product } from 'src/app/products/models/product.model';

export enum ProductsActionTypes {
  GET_PRODUCTS = '[Products] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR',

  CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS = '[Products] CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR = '[Products] CREATE_PRODUCT_ERROR',

  UPDATE_PRODUCT = '[Products] UPDATE_PRODUCT',
  UPDATE_PRODUCT_SUCCESS = '[Products] UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_ERROR = '[Products] UPDATE_PRODUCT_ERROR',
}

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class CreateProduct implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class GetProductsSuccess implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetProductsError implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;
  constructor(public payload: Error | string) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProductError implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: Error | string) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class CreateProductError implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_ERROR;
  constructor(public payload: Error | string) {}
}

export type ProductsActions =
  | GetProducts
  | CreateProduct
  | UpdateProduct
  | GetProductsSuccess
  | GetProductsError
  | UpdateProductSuccess
  | UpdateProductError
  | CreateProductSuccess
  | CreateProductError;
