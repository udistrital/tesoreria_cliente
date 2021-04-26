import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeguimientoFuentesComponent } from './form-seguimiento-fuentes.component';

describe('FormSeguimientoFuentesComponent', () => {
  let component: FormSeguimientoFuentesComponent;
  let fixture: ComponentFixture<FormSeguimientoFuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSeguimientoFuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSeguimientoFuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
