import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCertificacionesComponent } from './stepper-certificaciones.component';

describe('StepperCertificacionesComponent', () => {
  let component: StepperCertificacionesComponent;
  let fixture: ComponentFixture<StepperCertificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperCertificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
