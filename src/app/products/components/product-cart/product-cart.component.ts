import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: Product) => {
      this.product = { ...product };
    });
  }

  onDisplayFeedback(): void {
    this.router.navigate([{ outlets: { feedback: ['feedback'] } }]);
  }
}
