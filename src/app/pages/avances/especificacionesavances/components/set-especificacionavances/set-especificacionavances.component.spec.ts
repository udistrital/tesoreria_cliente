import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEspecificacionavancesComponent } from './set-especificacionavances.component';

describe('SetEspecificacionavancesComponent', () => {
  let component: SetEspecificacionavancesComponent;
  let fixture: ComponentFixture<SetEspecificacionavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEspecificacionavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEspecificacionavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
