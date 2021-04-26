import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReportePacComponent } from './tabla-reporte-pac.component';

describe('TablaReportePacComponent', () => {
  let component: TablaReportePacComponent;
  let fixture: ComponentFixture<TablaReportePacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReportePacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReportePacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
