import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPracticasacademicasComponent } from './set-practicasacademicas.component';

describe('SetPracticasacademicasComponent', () => {
  let component: SetPracticasacademicasComponent;
  let fixture: ComponentFixture<SetPracticasacademicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPracticasacademicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPracticasacademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
