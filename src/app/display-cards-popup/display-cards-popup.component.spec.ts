import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardsPopupComponent } from './display-cards-popup.component';

describe('DisplayCardsPopupComponent', () => {
  let component: DisplayCardsPopupComponent;
  let fixture: ComponentFixture<DisplayCardsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCardsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
