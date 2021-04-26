import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCertificadosComponent } from './table-certificados.component';

describe('TableCertificadosComponent', () => {
  let component: TableCertificadosComponent;
  let fixture: ComponentFixture<TableCertificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCertificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
