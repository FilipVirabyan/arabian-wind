import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastLinkSectionComponent } from './last-link-section.component';

describe('LastLinkSectionComponent', () => {
  let component: LastLinkSectionComponent;
  let fixture: ComponentFixture<LastLinkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastLinkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastLinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
