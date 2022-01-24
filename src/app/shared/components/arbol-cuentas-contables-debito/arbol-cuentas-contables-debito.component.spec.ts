import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolCuentasContablesDebitoComponent } from './arbol-cuentas-contables-debito.component';

describe('ArbolCuentasContablesComponent', () => {
  let component: ArbolCuentasContablesDebitoComponent;
  let fixture: ComponentFixture<ArbolCuentasContablesDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolCuentasContablesDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolCuentasContablesDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
