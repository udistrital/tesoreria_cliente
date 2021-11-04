import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCuentabancariaComponent } from './table-cuentabancaria.component';

describe('TableCuentabancariaComponent', () => {
  let component: TableCuentabancariaComponent;
  let fixture: ComponentFixture<TableCuentabancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCuentabancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCuentabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
