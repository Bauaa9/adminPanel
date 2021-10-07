import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualGraphComponent } from './annual-graph.component';

describe('AnnualGraphComponent', () => {
  let component: AnnualGraphComponent;
  let fixture: ComponentFixture<AnnualGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
