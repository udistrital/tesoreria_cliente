import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTiposavancesComponent } from './table-tiposavances.component';

describe('TableTiposavancesComponent', () => {
  let component: TableTiposavancesComponent;
  let fixture: ComponentFixture<TableTiposavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTiposavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTiposavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
