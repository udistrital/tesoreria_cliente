import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRetencionesComponent } from './table-retenciones.component';

describe('TableRetencionesComponent', () => {
  let component: TableRetencionesComponent;
  let fixture: ComponentFixture<TableRetencionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRetencionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRetencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
