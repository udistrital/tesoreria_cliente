import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStepperdeclaracionComponent } from './set-stepperdeclaracion.component';

describe('SetStepperdeclaracionComponent', () => {
  let component: SetStepperdeclaracionComponent;
  let fixture: ComponentFixture<SetStepperdeclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetStepperdeclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetStepperdeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
