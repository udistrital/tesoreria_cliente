import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSolicitudavancesComponent } from './table-solicitudavances.component';

describe('TableSolicitudavancesComponent', () => {
  let component: TableSolicitudavancesComponent;
  let fixture: ComponentFixture<TableSolicitudavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSolicitudavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSolicitudavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
