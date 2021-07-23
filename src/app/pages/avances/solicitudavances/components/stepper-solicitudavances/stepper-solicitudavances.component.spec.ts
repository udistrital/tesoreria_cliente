import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSolicitudavancesComponent } from './stepper-solicitudavances.component';

describe('StepperSolicitudavancesComponent', () => {
  let component: StepperSolicitudavancesComponent;
  let fixture: ComponentFixture<StepperSolicitudavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperSolicitudavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperSolicitudavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
