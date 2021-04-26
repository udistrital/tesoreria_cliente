import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsultainformeComponent } from './table-consultainforme.component';

describe('TableConsultainformeComponent', () => {
  let component: TableConsultainformeComponent;
  let fixture: ComponentFixture<TableConsultainformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConsultainformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsultainformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
