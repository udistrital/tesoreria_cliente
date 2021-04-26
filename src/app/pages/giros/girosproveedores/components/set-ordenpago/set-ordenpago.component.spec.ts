import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOrdenpagoComponent } from './set-ordenpago.component';

describe('SetOrdenpagoComponent', () => {
  let component: SetOrdenpagoComponent;
  let fixture: ComponentFixture<SetOrdenpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOrdenpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOrdenpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
