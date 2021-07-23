import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDescargarcomprobanteComponent } from './set-descargarcomprobante.component';

describe('SetDescargarcomprobanteComponent', () => {
  let component: SetDescargarcomprobanteComponent;
  let fixture: ComponentFixture<SetDescargarcomprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDescargarcomprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDescargarcomprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
