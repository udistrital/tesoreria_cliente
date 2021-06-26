import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutIngresosComponent } from './layout-ingresos.component';

describe('LayoutIngresosComponent', () => {
  let component: LayoutIngresosComponent;
  let fixture: ComponentFixture<LayoutIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
