import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarcomprobanteComponent } from './descargarcomprobante.component';

describe('DescargarcomprobanteComponent', () => {
  let component: DescargarcomprobanteComponent;
  let fixture: ComponentFixture<DescargarcomprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarcomprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarcomprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
