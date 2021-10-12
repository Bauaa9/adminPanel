import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeleteCardComponent } from './alert-delete-card.component';

describe('AlertDeleteCardComponent', () => {
  let component: AlertDeleteCardComponent;
  let fixture: ComponentFixture<AlertDeleteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeleteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeleteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
