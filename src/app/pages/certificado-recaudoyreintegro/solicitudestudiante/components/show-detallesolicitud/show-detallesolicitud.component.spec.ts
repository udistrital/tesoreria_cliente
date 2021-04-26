import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetallesolicitudComponent } from './show-detallesolicitud.component';

describe('ShowDetallesolicitudComponent', () => {
  let component: ShowDetallesolicitudComponent;
  let fixture: ComponentFixture<ShowDetallesolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetallesolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetallesolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
