import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageControllerComponent } from './language-controller.component';

describe('LanguageControllerComponent', () => {
  let component: LanguageControllerComponent;
  let fixture: ComponentFixture<LanguageControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
