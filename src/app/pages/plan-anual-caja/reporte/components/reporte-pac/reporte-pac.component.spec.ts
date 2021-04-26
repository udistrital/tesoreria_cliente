import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePacComponent } from './reporte-pac.component';

describe('ReportePacComponent', () => {
  let component: ReportePacComponent;
  let fixture: ComponentFixture<ReportePacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
