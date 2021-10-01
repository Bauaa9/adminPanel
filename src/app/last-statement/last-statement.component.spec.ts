import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastStatementComponent } from './last-statement.component';

describe('LastStatementComponent', () => {
  let component: LastStatementComponent;
  let fixture: ComponentFixture<LastStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
