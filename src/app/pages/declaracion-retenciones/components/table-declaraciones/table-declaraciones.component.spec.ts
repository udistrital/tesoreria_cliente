import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeclaracionesComponent } from './table-declaraciones.component';

describe('TableDeclaracionesComponent', () => {
  let component: TableDeclaracionesComponent;
  let fixture: ComponentFixture<TableDeclaracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDeclaracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeclaracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
