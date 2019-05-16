import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('products')) {
      const start = performance.now();
      return next.handle(req).pipe(
        map(res => {
          console.log('took ' + (performance.now() - start) + 'ms');
          return res;
        }),
      );
    }
    return next.handle(req);
  }
}
