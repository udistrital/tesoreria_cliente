import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChequeAnuladoComponent } from './modal-cheque-anulado.component';

describe('ModalChequeAnuladoComponent', () => {
  let component: ModalChequeAnuladoComponent;
  let fixture: ComponentFixture<ModalChequeAnuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChequeAnuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChequeAnuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
