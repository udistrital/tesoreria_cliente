import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConceptosComponent } from './table-conceptos.component';

describe('TableConceptosComponent', () => {
  let component: TableConceptosComponent;
  let fixture: ComponentFixture<TableConceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
