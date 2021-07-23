import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRequisitoavancesComponent } from './set-requisitoavances.component';

describe('SetRequisitoavancesComponent', () => {
  let component: SetRequisitoavancesComponent;
  let fixture: ComponentFixture<SetRequisitoavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRequisitoavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRequisitoavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
