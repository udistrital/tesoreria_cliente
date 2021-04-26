import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudReactivacionComponent } from './solicitud-reactivacion.component';

describe('SolicitudReactivacionComponent', () => {
  let component: SolicitudReactivacionComponent;
  let fixture: ComponentFixture<SolicitudReactivacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudReactivacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudReactivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
