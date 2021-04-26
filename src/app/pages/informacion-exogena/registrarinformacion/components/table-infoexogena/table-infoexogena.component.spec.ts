import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoexogenaComponent } from './table-infoexogena.component';

describe('TableInfoexogenaComponent', () => {
  let component: TableInfoexogenaComponent;
  let fixture: ComponentFixture<TableInfoexogenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoexogenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoexogenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
