import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLinkSectionComponent } from './middle-link-section.component';

describe('MiddleLinkSectionComponent', () => {
  let component: MiddleLinkSectionComponent;
  let fixture: ComponentFixture<MiddleLinkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleLinkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleLinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
