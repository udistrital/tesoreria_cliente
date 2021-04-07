import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOtrasentidaesComponent } from './table-otrasentidaes.component';

describe('TableOtrasentidaesComponent', () => {
  let component: TableOtrasentidaesComponent;
  let fixture: ComponentFixture<TableOtrasentidaesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOtrasentidaesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOtrasentidaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
