import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReporteMatriculasComponent } from './detalle-reporte-matriculas.component';

describe('DetalleReporteMatriculasComponent', () => {
  let component: DetalleReporteMatriculasComponent;
  let fixture: ComponentFixture<DetalleReporteMatriculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleReporteMatriculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleReporteMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
