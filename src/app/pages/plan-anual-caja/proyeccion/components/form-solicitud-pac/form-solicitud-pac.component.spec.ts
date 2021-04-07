import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitudPacComponent } from './form-solicitud-pac.component';

describe('FormSolicitudPacComponent', () => {
  let component: FormSolicitudPacComponent;
  let fixture: ComponentFixture<FormSolicitudPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSolicitudPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSolicitudPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
