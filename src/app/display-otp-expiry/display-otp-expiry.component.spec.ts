import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOtpExpiryComponent } from './display-otp-expiry.component';

describe('DisplayOtpExpiryComponent', () => {
  let component: DisplayOtpExpiryComponent;
  let fixture: ComponentFixture<DisplayOtpExpiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOtpExpiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOtpExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
