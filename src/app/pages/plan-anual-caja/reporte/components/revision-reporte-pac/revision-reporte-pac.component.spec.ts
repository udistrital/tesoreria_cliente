import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionReportePacComponent } from './revision-reporte-pac.component';

describe('RevisionReportePacComponent', () => {
  let component: RevisionReportePacComponent;
  let fixture: ComponentFixture<RevisionReportePacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionReportePacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionReportePacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
