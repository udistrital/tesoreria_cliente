import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaOrdenesPagoComponent } from './consulta-ordenes-pago.component';

describe('ConsultaOrdenesPagoComponent', () => {
  let component: ConsultaOrdenesPagoComponent;
  let fixture: ComponentFixture<ConsultaOrdenesPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaOrdenesPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaOrdenesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
