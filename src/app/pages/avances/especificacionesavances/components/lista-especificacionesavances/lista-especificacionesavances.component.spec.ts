import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecificacionesavancesComponent } from './lista-especificacionesavances.component';

describe('ListaEspecificacionesavancesComponent', () => {
  let component: ListaEspecificacionesavancesComponent;
  let fixture: ComponentFixture<ListaEspecificacionesavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEspecificacionesavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspecificacionesavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
