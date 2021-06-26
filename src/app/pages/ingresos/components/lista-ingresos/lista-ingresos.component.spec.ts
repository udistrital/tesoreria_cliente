import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIngresosComponent } from './lista-ingresos.component';

describe('ListaIngresosComponent', () => {
  let component: ListaIngresosComponent;
  let fixture: ComponentFixture<ListaIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
