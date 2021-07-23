import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperValorizacionComponent } from './stepper-valorizacion.component';

describe('StepperValorizacionComponent', () => {
  let component: StepperValorizacionComponent;
  let fixture: ComponentFixture<StepperValorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperValorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperValorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
