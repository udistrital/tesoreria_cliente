import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListabancosComponent } from './table-listabancos.component';

describe('TableListabancosComponent', () => {
  let component: TableListabancosComponent;
  let fixture: ComponentFixture<TableListabancosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListabancosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListabancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
