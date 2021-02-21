import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLegalizacionReintegrosComponent } from './table-legalizacion-reintegros.component';

describe('TableLegalizacionReintegrosComponent', () => {
  let component: TableLegalizacionReintegrosComponent;
  let fixture: ComponentFixture<TableLegalizacionReintegrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLegalizacionReintegrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLegalizacionReintegrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
