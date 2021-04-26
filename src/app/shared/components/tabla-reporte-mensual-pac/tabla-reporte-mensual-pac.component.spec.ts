import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReporteMensualPacComponent } from './tabla-reporte-mensual-pac.component';

describe('TablaReporteMensualPacComponent', () => {
  let component: TablaReporteMensualPacComponent;
  let fixture: ComponentFixture<TablaReporteMensualPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporteMensualPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReporteMensualPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
