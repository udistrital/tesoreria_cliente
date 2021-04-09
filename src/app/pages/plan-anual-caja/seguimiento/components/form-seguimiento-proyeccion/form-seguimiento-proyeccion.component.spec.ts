import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeguimientoProyeccionComponent } from './form-seguimiento-proyeccion.component';

describe('FormSeguimientoProyeccionComponent', () => {
  let component: FormSeguimientoProyeccionComponent;
  let fixture: ComponentFixture<FormSeguimientoProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSeguimientoProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSeguimientoProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
