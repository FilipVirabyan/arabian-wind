import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithFilterComponent } from './products-with-filter.component';

describe('ProductsWithFilterComponent', () => {
  let component: ProductsWithFilterComponent;
  let fixture: ComponentFixture<ProductsWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
