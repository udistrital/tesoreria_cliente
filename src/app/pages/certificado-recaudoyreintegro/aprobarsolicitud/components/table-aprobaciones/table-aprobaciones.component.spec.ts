import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAprobacionesComponent } from './table-aprobaciones.component';

describe('TableAprobacionesComponent', () => {
  let component: TableAprobacionesComponent;
  let fixture: ComponentFixture<TableAprobacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAprobacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAprobacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
