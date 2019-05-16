import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<Product[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(response => <Product[]>response)
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(catchError(this.handleError));
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  createProduct(product: Product): Promise<Product> {
    const url = this.productsUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };
    return this.http
      .post<Product>(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
