import { initialProductsState, ProductsState } from './products.state';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { Product } from 'src/app/products/models/product.model';

export function productsReducer(
  state = initialProductsState,
  action: ProductsActions,
): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      console.log('GET_PRODUCTS action being handled!');
      return {
        ...state,
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT: {
      console.log('CREATE_PRODUCT action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      console.log('GET_PRODUCTS_SUCCESS action being handled!');
      const data = [...(<Array<Product>>action.payload)];
      return {
        ...state,
        data,
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      console.log('GET_PRODUCTS_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      console.log('UPDATE_PRODUCT_SUCCESS action being handled!');
      const product = { ...(<Product>action.payload) };
      const data = [...state.data];
      const index = data.findIndex(t => t.id === product.id);

      data[index] = product;

      return {
        ...state,
        data,
      };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_ERROR: {
      console.log('UPDATE_PRODUCT_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      console.log('CREATE_PRODUCT_SUCCESS action being handled!');
      const product = { ...(<Product>action.payload) };
      const data = [...state.data, product];

      return {
        ...state,
        data,
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR: {
      console.log('CREATE_PRODUCT_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }

    default: {
      console.log('UNKNOWN_PRODUCT action being handled!');
      return state;
    }
  }
}
