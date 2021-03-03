import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLegalizacionesComponent } from './lista-legalizaciones.component';

describe('ListaLegalizacionesComponent', () => {
  let component: ListaLegalizacionesComponent;
  let fixture: ComponentFixture<ListaLegalizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLegalizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLegalizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
