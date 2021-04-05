import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetalleadquisicionComponent } from './show-detalleadquisicion.component';

describe('ShowDetalleadquisicionComponent', () => {
  let component: ShowDetalleadquisicionComponent;
  let fixture: ComponentFixture<ShowDetalleadquisicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetalleadquisicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetalleadquisicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
