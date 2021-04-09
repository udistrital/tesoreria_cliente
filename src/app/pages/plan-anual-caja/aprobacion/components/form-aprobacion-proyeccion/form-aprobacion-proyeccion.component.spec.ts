import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAprobacionProyeccionComponent } from './form-aprobacion-proyeccion.component';

describe('FormAprobacionProyeccionComponent', () => {
  let component: FormAprobacionProyeccionComponent;
  let fixture: ComponentFixture<FormAprobacionProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAprobacionProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAprobacionProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
