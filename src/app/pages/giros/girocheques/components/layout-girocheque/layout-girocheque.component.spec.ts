import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGirochequeComponent } from './layout-girocheque.component';

describe('LayoutGirochequeComponent', () => {
  let component: LayoutGirochequeComponent;
  let fixture: ComponentFixture<LayoutGirochequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGirochequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGirochequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
