import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ProductComponent,
  ProductComponentCategory,
} from './product.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-product [name]="'apple'" [category]="ProductComponentCategory.Fruits">
    </app-product>
  `,
})
class ProductHostComponent {
  ProductComponentCategory = ProductComponentCategory;
}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ProductHostComponent', () => {
  let fixture: ComponentFixture<ProductHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHostComponent, ProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHostComponent);
    fixture.detectChanges();
  });

  it('should contain a product name', () => {
    expect(fixture.nativeElement.textContent).toContain('Product: apple');
  });

  it('should contain a product category', () => {
    expect(fixture.nativeElement.textContent).toContain('Category: FRUITS');
  });
});
