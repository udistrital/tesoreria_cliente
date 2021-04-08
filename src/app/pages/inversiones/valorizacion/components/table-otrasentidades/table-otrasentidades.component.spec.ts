import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOtrasentidadesComponent } from './table-otrasentidades.component';

describe('TableOtrasentidadesComponent', () => {
  let component: TableOtrasentidadesComponent;
  let fixture: ComponentFixture<TableOtrasentidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOtrasentidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOtrasentidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
