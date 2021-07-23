import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInformationComponent } from './set-information.component';

describe('SetInformationComponent', () => {
  let component: SetInformationComponent;
  let fixture: ComponentFixture<SetInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
