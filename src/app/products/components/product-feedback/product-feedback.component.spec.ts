import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedbackComponent } from './product-feedback.component';

describe('ProductFeedbackComponent', () => {
  let component: ProductFeedbackComponent;
  let fixture: ComponentFixture<ProductFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
