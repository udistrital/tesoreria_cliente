import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyeccionComponent } from './form-proyeccion.component';

describe('FormProyeccionComponent', () => {
  let component: FormProyeccionComponent;
  let fixture: ComponentFixture<FormProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
