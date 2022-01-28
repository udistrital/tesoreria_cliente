import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolCuentasContablesCreditoComponent } from './arbol-cuentas-contables-credito.component';

describe('ArbolCuentasContablesCreditoComponent', () => {
  let component: ArbolCuentasContablesCreditoComponent;
  let fixture: ComponentFixture<ArbolCuentasContablesCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolCuentasContablesCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolCuentasContablesCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
