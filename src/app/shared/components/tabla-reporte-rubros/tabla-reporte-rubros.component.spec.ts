import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReporteRubrosComponent } from './tabla-reporte-rubros.component';

describe('TablaReporteRubrosComponent', () => {
  let component: TablaReporteRubrosComponent;
  let fixture: ComponentFixture<TablaReporteRubrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporteRubrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReporteRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
