import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReporteTotalesComponent } from './tabla-reporte-totales.component';

describe('TablaReporteTotalesComponent', () => {
  let component: TablaReporteTotalesComponent;
  let fixture: ComponentFixture<TablaReporteTotalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporteTotalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReporteTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
