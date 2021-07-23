import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIngresosComponent } from './crear-ingresos.component';

describe('CrearIngresosComponent', () => {
  let component: CrearIngresosComponent;
  let fixture: ComponentFixture<CrearIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
