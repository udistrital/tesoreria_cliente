import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReporteMatriculasComponent } from './tabla-reporte-matriculas.component';

describe('TablaReporteMatriculasComponent', () => {
  let component: TablaReporteMatriculasComponent;
  let fixture: ComponentFixture<TablaReporteMatriculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporteMatriculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReporteMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
