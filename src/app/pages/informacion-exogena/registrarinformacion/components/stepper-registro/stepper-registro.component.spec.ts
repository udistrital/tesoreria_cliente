import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperRegistroComponent } from './stepper-registro.component';

describe('StepperRegistroComponent', () => {
  let component: StepperRegistroComponent;
  let fixture: ComponentFixture<StepperRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
