import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnbilledTxnComponent } from './unbilled-txn.component';

describe('UnbilledTxnComponent', () => {
  let component: UnbilledTxnComponent;
  let fixture: ComponentFixture<UnbilledTxnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnbilledTxnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnbilledTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
