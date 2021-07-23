import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperNuevasolicitudComponent } from './stepper-nuevasolicitud.component';

describe('StepperNuevasolicitudComponent', () => {
  let component: StepperNuevasolicitudComponent;
  let fixture: ComponentFixture<StepperNuevasolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperNuevasolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperNuevasolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
