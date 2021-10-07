/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TxnFailComponent } from './txn-fail.component';

describe('Txn_failComponent', () => {
  let component: TxnFailComponent;
  let fixture: ComponentFixture<TxnFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxnFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
