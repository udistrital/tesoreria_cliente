import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperReintegrosComponent } from './stepper-reintegros.component';

describe('StepperReintegrosComponent', () => {
  let component: StepperReintegrosComponent;
  let fixture: ComponentFixture<StepperReintegrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperReintegrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperReintegrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
