import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReporteSumasComponent } from './tabla-reporte-sumas.component';

describe('TablaReporteSumasComponent', () => {
  let component: TablaReporteSumasComponent;
  let fixture: ComponentFixture<TablaReporteSumasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporteSumasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReporteSumasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
